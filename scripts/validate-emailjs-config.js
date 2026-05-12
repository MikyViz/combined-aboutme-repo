// This file can be used to test EmailJS configuration
import { emailjsConfig } from './emailjs.js';

/**
 * Validates the EmailJS configuration
 * Run this script with Node.js to check if your EmailJS configuration is valid
 */

const { serviceId, templateId, publicKey } = emailjsConfig;

console.log('======================================');
console.log('EmailJS Configuration Validation');
console.log('======================================');

let isValid = true;

// Check if all required values are present
if (!serviceId) {
  console.error('❌ Service ID is missing!');
  isValid = false;
} else {
  console.log('✅ Service ID is present');
}

if (!templateId) {
  console.error('❌ Template ID is missing!');
  isValid = false;
} else {
  console.log('✅ Template ID is present');
}

if (!publicKey) {
  console.error('❌ Public Key is missing!');
  isValid = false;
} else {
  console.log('✅ Public Key is present');
}

// Check formats
if (serviceId && !serviceId.startsWith('service_')) {
  console.warn('⚠️ Service ID should start with "service_"');
}

if (templateId && !templateId.startsWith('template_')) {
  console.warn('⚠️ Template ID should start with "template_"');
}

if (publicKey && publicKey.length < 10) {
  console.warn('⚠️ Public Key seems too short');
}

console.log('======================================');
if (isValid) {
  console.log('✅ Configuration appears to be valid!');
  console.log('To fully test, you need to send a real email using the EmailJS API.');
} else {
  console.error('❌ Configuration has issues! Please fix them before deploying.');
}
console.log('======================================');
