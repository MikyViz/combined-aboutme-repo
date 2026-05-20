import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.EMAIL_FROM || 'Portfolio <onboarding@resend.dev>';
const TO = process.env.EMAIL_TO || 'vizenovsky@gmail.com';

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    reply_to: email,
    subject: `Контактная форма: ${subject}`,
    html: `
      <h2>Новое сообщение с контактной формы</h2>
      <p><strong>От:</strong> ${name} (${email})</p>
      <p><strong>Тема:</strong> ${subject}</p>
      <p><strong>Сообщение:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    `,
  });

  if (error) {
    console.error('Error sending contact email:', error);
    throw new Error(error.message);
  }

  console.log('Contact email sent:', data?.id);
  return data;
};

export const sendReviewNotificationEmail = async ({ authorName, authorEmail, content }) => {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    reply_to: authorEmail,
    subject: `Новый отзыв от ${authorName}`,
    html: `
      <h2>Новый отзыв на сайте</h2>
      <p><strong>Автор:</strong> ${authorName} (${authorEmail})</p>
      <p><strong>Отзыв:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${String(content).replace(/\n/g, '<br>')}
      </div>
    `,
  });

  if (error) {
    console.error('Error sending review notification:', error);
    return; // не бросаем — отзыв должен сохраниться даже если письмо не ушло
  }

  console.log('Review notification sent:', data?.id);
  return data;
};
