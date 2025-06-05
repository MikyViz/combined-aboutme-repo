# Configuration Files

This directory contains configuration files for various services and integrations used in the project.

## EmailJS Configuration

The `emailjs.js` file contains configuration for EmailJS service which powers the contact form functionality.

### Why we use hardcoded values

While it's generally better to use environment variables for API keys and service IDs, we've chosen to use hardcoded values for EmailJS because:

1. EmailJS public keys are designed to be exposed on the client side - they have limited capabilities by design
2. GitHub Pages deployment doesn't easily support environment variables at runtime
3. This approach simplifies deployment and eliminates environment-related errors

### If you need to update the EmailJS configuration

If you need to change the EmailJS service, template, or public key:

1. Update the values in `emailjs.js`
2. Test the contact form locally
3. Deploy to GitHub Pages

### Security Considerations

The EmailJS public key and service IDs are not considered sensitive since they are meant to be used on the client side. EmailJS has built-in protections against abuse.

For more sensitive API keys or secrets, consider using a backend service that can securely store and use these values.
