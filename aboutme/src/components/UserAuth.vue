<template>
  <div>
    <!-- Logged in state -->
    <UserProfile v-if="auth.isLoggedIn" />

    <!-- Not logged in -->
    <v-btn v-else variant="outlined" size="small" @click="dialog = true">
      Sign In / Register
    </v-btn>

    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="420" persistent>
      <v-card class="glass-card">
        <v-card-title class="pt-4 px-4">
          <v-tabs v-model="tab" grow>
            <v-tab value="login">Login</v-tab>
            <v-tab value="signup">Register</v-tab>
          </v-tabs>
        </v-card-title>

        <v-card-text class="px-4 pb-2">
          <v-alert v-if="auth.error" type="error" variant="tonal" class="mb-3" density="compact">
            {{ auth.error }}
          </v-alert>

          <!-- Login form -->
          <v-form v-if="tab === 'login'" @submit.prevent="handleLogin">
            <v-text-field v-model="loginForm.email" label="Email" type="email" required class="mb-2" />
            <v-text-field v-model="loginForm.password" label="Password" type="password" required class="mb-2" />
            <v-btn type="submit" block color="primary" :loading="auth.loading" class="mt-2">Login</v-btn>
          </v-form>

          <!-- Sign up form -->
          <v-form v-else @submit.prevent="handleSignUp">
            <v-text-field v-model="signupForm.firstName" label="First Name" required class="mb-2" />
            <v-text-field v-model="signupForm.lastName" label="Last Name" required class="mb-2" />
            <v-text-field v-model="signupForm.email" label="Email" type="email" required class="mb-2" />
            <v-text-field v-model="signupForm.password" label="Password" type="password" required class="mb-2" />
            <v-file-input v-model="signupForm.avatarFile" label="Avatar (optional)" accept="image/*" prepend-icon="mdi-camera" class="mb-2" />
            <v-btn type="submit" block color="primary" :loading="auth.loading" class="mt-2">Register</v-btn>
          </v-form>
        </v-card-text>

        <v-card-actions class="px-4 pb-4">
          <v-spacer />
          <v-btn variant="text" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
import UserProfile from '@/components/UserProfile.vue';

const auth = useAuthStore();
const dialog = ref(false);
const tab = ref('login');

const loginForm = reactive({ email: '', password: '' });
const signupForm = reactive({ firstName: '', lastName: '', email: '', password: '', avatarFile: null });

async function handleLogin() {
  const ok = await auth.login(loginForm.email, loginForm.password);
  if (ok) dialog.value = false;
}

async function handleSignUp() {
  const formData = new FormData();
  formData.append('firstName', signupForm.firstName);
  formData.append('lastName', signupForm.lastName);
  formData.append('email', signupForm.email);
  formData.append('password', signupForm.password);
  if (signupForm.avatarFile) formData.append('avatar', signupForm.avatarFile);

  const ok = await auth.signUp(formData);
  if (ok) dialog.value = false;
}
</script>
