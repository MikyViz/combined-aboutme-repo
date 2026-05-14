<template>
  <v-container class="pa-4">
    <h2 class="professional-title text-h5 mb-4">{{ t('reviews.title') }}</h2>

    <!-- Add review (only when logged in) -->
    <v-card v-if="auth.isLoggedIn" class="glass-card mb-6 pa-4">
      <p class="professional-text mb-2">{{ t('reviews.leaveAs') }} <strong>{{ auth.fullName }}</strong></p>
      <v-textarea
        v-model="newContent"
        :label="t('reviews.placeholder')"
        rows="3"
        auto-grow
        :disabled="submitting"
      />
      <v-alert v-if="submitError" type="error" variant="tonal" density="compact" class="mb-2">
        {{ submitError }}
      </v-alert>
      <v-btn color="primary" :loading="submitting" @click="submitReview">{{ t('reviews.submit') }}</v-btn>
    </v-card>

    <v-alert v-else type="info" variant="tonal" density="compact" class="mb-6">
      <UserAuth /> &nbsp; {{ t('reviews.loginPrompt') }}
    </v-alert>

    <!-- Reviews list -->
    <div v-if="loading" class="d-flex justify-center py-6">
      <v-progress-circular indeterminate color="primary" />
    </div>

    <div v-else-if="reviews.length === 0" class="professional-text text-center py-6">
      {{ t('reviews.noReviews') }}
    </div>

    <v-card
      v-for="review in reviews"
      :key="review.reviewId"
      class="glass-card mb-3 pa-4"
    >
      <div class="d-flex align-center ga-3 mb-2">
        <v-avatar size="40">
          <v-img v-if="review.User?.avatar" :src="review.User.avatar" />
          <v-icon v-else>mdi-account</v-icon>
        </v-avatar>
        <div class="flex-grow-1">
          <div class="professional-text font-weight-medium">
            {{ review.User?.firstName }} {{ review.User?.lastName }}
          </div>
          <div class="text-caption text-medium-emphasis">
            {{ formatDate(review.createdAt) }}
          </div>
        </div>
        <v-btn
          v-if="auth.user?.id === review.UserId"
          icon size="small" variant="text"
          @click="startEdit(review)"
        >
          <v-icon size="18">mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          v-if="auth.user?.id === review.UserId"
          icon size="small" variant="text" color="error"
          @click="deleteReview(review.reviewId)"
        >
          <v-icon size="18">mdi-delete</v-icon>
        </v-btn>
      </div>

      <!-- Edit mode -->
      <div v-if="editingId === review.reviewId">
        <v-textarea v-model="editContent" rows="2" auto-grow density="compact" class="mb-2" />
        <v-alert v-if="editError" type="error" variant="tonal" density="compact" class="mb-2">{{ editError }}</v-alert>
        <div class="d-flex ga-2">
          <v-btn size="small" color="primary" :loading="editSubmitting" @click="saveEdit(review.reviewId)">{{ t('reviews.save') }}</v-btn>
          <v-btn size="small" variant="text" @click="cancelEdit">{{ t('reviews.cancel') }}</v-btn>
        </div>
      </div>
      <p v-else class="professional-text">{{ review.content }}</p>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import UserAuth from '@/components/UserAuth.vue';
import { t } from '@/i18n';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8081').replace(/\/$/, '');

async function safeJson(res) {
  const text = await res.text();
  try { return JSON.parse(text); } catch { return []; }
}

const auth = useAuthStore();
const reviews = ref([]);
const loading = ref(false);
const newContent = ref('');
const submitting = ref(false);
const submitError = ref('');
const editingId = ref(null);
const editContent = ref('');
const editSubmitting = ref(false);
const editError = ref('');

async function fetchReviews() {
  loading.value = true;
  try {
    const res = await fetch(`${API_URL}/review/all`);
    reviews.value = await safeJson(res);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}

async function submitReview() {
  if (!newContent.value.trim()) return;
  submitting.value = true;
  submitError.value = '';
  try {
    const res = await fetch(`${API_URL}/review/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ content: newContent.value }),
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(data.msg || 'Failed to submit');
    newContent.value = '';
    await fetchReviews();
  } catch (e) {
    submitError.value = e.message;
  } finally {
    submitting.value = false;
  }
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

async function deleteReview(reviewId) {
  try {
    const res = await fetch(`${API_URL}/review/delete/${reviewId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${auth.token}` },
    });
    if (res.ok) await fetchReviews();
  } catch (e) {
    console.error(e);
  }
}

function startEdit(review) {
  editingId.value = review.reviewId;
  editContent.value = review.content;
  editError.value = '';
}

function cancelEdit() {
  editingId.value = null;
  editContent.value = '';
}

async function saveEdit(reviewId) {
  editSubmitting.value = true;
  editError.value = '';
  try {
    const res = await fetch(`${API_URL}/review/update/${reviewId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ content: editContent.value }),
    });
    const data = await safeJson(res);
    if (!res.ok) throw new Error(data.msg || 'Failed to update');
    cancelEdit();
    await fetchReviews();
  } catch (e) {
    editError.value = e.message;
  } finally {
    editSubmitting.value = false;
  }
}

onMounted(fetchReviews);
</script>
