<template>
  <div>
    <!-- Avatar menu -->
    <v-menu v-model="menu" :close-on-content-click="false" offset="8">
      <template #activator="{ props }">
        <v-btn icon v-bind="props" variant="text">
          <v-avatar size="36">
            <v-img v-if="auth.user?.avatar" :src="auth.user.avatar" />
            <v-icon v-else size="32">mdi-account-circle</v-icon>
          </v-avatar>
        </v-btn>
      </template>

      <v-card min-width="280" class="glass-card">
        <v-card-text class="pb-0">
          <div class="d-flex align-center ga-3 mb-3">
            <v-avatar size="48">
              <v-img v-if="auth.user?.avatar" :src="auth.user.avatar" />
              <v-icon v-else size="36">mdi-account</v-icon>
            </v-avatar>
            <div>
              <div class="professional-text font-weight-medium">{{ auth.fullName }}</div>
              <div class="text-caption text-medium-emphasis">{{ auth.user?.email }}</div>
            </div>
          </div>
          <v-divider class="mb-2" />
        </v-card-text>

        <v-list density="compact" bg-color="transparent">
          <v-list-item prepend-icon="mdi-pencil" title="Edit Profile" @click="openEdit" />
          <v-list-item prepend-icon="mdi-logout" title="Logout" @click="handleLogout" />
        </v-list>
      </v-card>
    </v-menu>

    <!-- Edit dialog -->
    <v-dialog v-model="editDialog" max-width="420" persistent>
      <v-card class="glass-card">
        <v-card-title class="pt-4 px-4">Edit Profile</v-card-title>
        <v-card-text class="px-4 pb-2">
          <v-alert v-if="auth.error" type="error" variant="tonal" density="compact" class="mb-3">
            {{ auth.error }}
          </v-alert>
          <v-form @submit.prevent="handleUpdate">
            <v-text-field v-model="form.firstName" label="First Name" class="mb-2" />
            <v-text-field v-model="form.lastName" label="Last Name" class="mb-2" />
            <v-text-field v-model="form.phone" label="Phone" class="mb-2" />
            <v-file-input v-model="form.avatarFile" label="New Avatar" accept="image/*" prepend-icon="mdi-camera" class="mb-2" />
            <v-btn type="submit" block color="primary" :loading="auth.loading">Save</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-4 pb-4">
          <v-spacer />
          <v-btn variant="text" @click="editDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const menu = ref(false);
const editDialog = ref(false);

const form = reactive({ firstName: '', lastName: '', phone: '', avatarFile: null });

function openEdit() {
  form.firstName = auth.user?.firstName || '';
  form.lastName = auth.user?.lastName || '';
  form.phone = auth.user?.phone || '';
  form.avatarFile = null;
  menu.value = false;
  editDialog.value = true;
}

async function handleUpdate() {
  const formData = new FormData();
  if (form.firstName) formData.append('firstName', form.firstName);
  if (form.lastName) formData.append('lastName', form.lastName);
  if (form.phone) formData.append('phone', form.phone);
  if (form.avatarFile) formData.append('avatar', form.avatarFile);

  const ok = await auth.updateUser(formData);
  if (ok) editDialog.value = false;
}

function handleLogout() {
  auth.logout();
  menu.value = false;
}
</script>
