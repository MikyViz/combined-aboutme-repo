<template>
  <v-container class="pa-4">
    <h2 class="professional-title text-h5 mb-4">Reviews</h2>

    <!-- Add review (only when logged in) -->
    <v-card v-if="auth.isLoggedIn" class="glass-card mb-6 pa-4">
      <p class="professional-text mb-2">Leave a review as <strong>{{ auth.fullName }}</strong></p>
      <v-textarea
        v-model="newContent"
        label="Your review"
        rows="3"
        auto-grow
        :disabled="submitting"
      />
      <v-alert v-if="submitError" type="error" variant="tonal" density="compact" class="mb-2">
        {{ submitError }}
      </v-alert>
      <v-btn color="primary" :loading="submitting" @click="submitReview">Submit</v-btn>
    </v-card>

    <v-alert v-else type="info" variant="tonal" density="compact" class="mb-6">
      <UserAuth /> &nbsp; to leave a review
    </v-alert>

    <!-- Reviews list -->
    <div v-if="loading" class="d-flex justify-center py-6">
      <v-progress-circular indeterminate color="primary" />
    </div>

    <div v-else-if="reviews.length === 0" class="professional-text text-center py-6">
      No reviews yet. Be the first!
    </div>

    <v-card
      v-for="review in reviews"
      :key="review.reviewId"
      class="glass-card mb-3 pa-4"
    >
      <div class="d-flex align-center ga-3 mb-2">
        <v-avatar size="40" :image="review.User?.avatar || undefined">
          <v-icon v-if="!review.User?.avatar">mdi-account</v-icon>
        </v-avatar>
        <div>
          <div class="professional-text font-weight-medium">
            {{ review.User?.firstName }} {{ review.User?.lastName }}
          </div>
          <div class="text-caption text-medium-emphasis">
            {{ formatDate(review.createdAt) }}
          </div>
        </div>
      </div>
      <p class="professional-text">{{ review.content }}</p>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import UserAuth from '@/components/UserAuth.vue';

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

onMounted(fetchReviews);
</script>
