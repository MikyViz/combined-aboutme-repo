<template>
  <v-container>
    <v-card class="mx-auto contact-form-card" max-width="800">      <v-card-title class="text-h4 text-center">
        {{ t('contact.title') }}
      </v-card-title>
      
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
        <v-card-text>
          <v-alert
            v-if="formStatus === 'success'"
            type="success"
            variant="tonal"
            closable
            class="mb-4"          >
            {{ t('contact.success') }}
          </v-alert>
          
          <v-alert
            v-if="formStatus === 'error'"
            type="error"
            variant="tonal"
            closable
            class="mb-4"          >
            {{ t('contact.error') }}
          </v-alert>
          
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :label="t('contact.name')"
                required
                variant="outlined"
                prepend-inner-icon="mdi-account"
                :disabled="loading"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="6">              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="t('contact.email')"
                required
                variant="outlined"
                prepend-inner-icon="mdi-email"
                :disabled="loading"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12">              <v-text-field
                v-model="subject"
                :rules="subjectRules"
                :label="t('contact.subject')"
                required
                variant="outlined"
                prepend-inner-icon="mdi-text-subject"
                :disabled="loading"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12">              <v-textarea
                v-model="message"
                :rules="messageRules"
                :label="t('contact.message')"
                required
                variant="outlined"
                prepend-inner-icon="mdi-message-text"
                :disabled="loading"
                auto-grow
                rows="5"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            size="large"
            type="submit"
            :loading="loading"
            :disabled="!valid || loading"
            class="px-8"          >
            {{ t('contact.send') }}
            <v-icon class="ml-2">mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
      
      <v-card-text class="text-center mt-4">
        <div class="text-body-1 mb-4">{{ t('contact.contactMe') }}</div>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn icon color="blue" href="https://linkedin.com/in/mikyviz" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon color="purple" href="https://github.com/MikyViz" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon color="red" href="mailto:vizenovsky@gmail.com">
              <v-icon>mdi-gmail</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { t } from '@/translations';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';

const form = ref(null);
const valid = ref(true);
const loading = ref(false);
const formStatus = ref(null); // 'success', 'error', null

// Form fields
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

// Validation rules
const nameRules = computed(() => [
  v => !!v || t('contact.validation.nameRequired'),
  v => v.length <= 50 || t('contact.validation.nameTooLong')
]);

const emailRules = computed(() => [
  v => !!v || t('contact.validation.emailRequired'),
  v => /.+@.+\..+/.test(v) || t('contact.validation.emailInvalid')
]);

const subjectRules = computed(() => [
  v => !!v || t('contact.validation.subjectRequired'),
  v => v.length <= 100 || t('contact.validation.subjectTooLong')
]);

const messageRules = computed(() => [
  v => !!v || t('contact.validation.messageRequired'),
  v => v.length >= 10 || t('contact.validation.messageTooShort')
]);

// Функция отправки формы
const submitForm = async () => {
  if (!form.value.validate()) return;
  
  loading.value = true;
  formStatus.value = null;
  try {    const templateParams = {
      name: name.value,           // Changed from from_name to name to match template {{name}}
      from_email: email.value,    // Keep this as is if template uses {{from_email}}
      title: subject.value,       // Changed from subject to title to match template {{title}}
      message: message.value      // Keep this as is if template uses {{message}}
    };
    
    // Используем жестко закодированные значения
    const { serviceId, templateId, publicKey } = emailjsConfig;
      // Улучшена отладочная информация без вывода значений в консоль
    console.log('Using EmailJS Config:', { 
      serviceId: serviceId ? '✓ Present' : '✗ Missing', 
      templateId: templateId ? '✓ Present' : '✗ Missing',
      publicKey: publicKey ? '✓ Present' : '✗ Missing' 
    });
    
    // Проверка наличия необходимых переменных
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing required EmailJS configuration values in config file');
      throw new Error('Email configuration error - please contact site administrator');
    }
      const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    
    // Проверяем наличие успешного ответа от EmailJS
    if (result && result.status === 200) {
      console.log('Email successfully sent!', result.text);
      formStatus.value = 'success';
      resetForm();
    } else {
      console.warn('EmailJS returned unexpected response:', result);
      throw new Error('Failed to send email - please try again');
    }
  } catch (error) {
    console.error('Ошибка при отправке:', error);
    formStatus.value = 'error';
  } finally {
    loading.value = false;
  }
};

const resetForm = () => {
  form.value.reset();
  name.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
};
</script>

<style scoped>
.contact-form-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
}
</style>
