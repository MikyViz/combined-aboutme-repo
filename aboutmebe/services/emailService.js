import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Настройка транспорта nodemailer
const createTransporter = async () => {
  // Проверяем, используется ли режим разработки
  if (process.env.NODE_ENV !== 'production') {
    // Создаем тестовый аккаунт на ethereal.email
    const testAccount = await nodemailer.createTestAccount();
    
    // Выводим информацию для просмотра тестовых писем
    console.log('Тестовый аккаунт создан для просмотра писем:');
    console.log('Email:', testAccount.user);
    console.log('Пароль:', testAccount.pass);
    console.log('Для просмотра писем перейдите на https://ethereal.email и войдите с этими данными');
    
    // Создаем транспортер для ethereal.email
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
  } else {
    // Используем настройки из .env для продакшн-режима
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }
};

export const sendContactEmail = async ({ name, email, subject, message }) => {
  try {
    const transporter = await createTransporter();
    
    // HTML шаблон для письма
    const htmlContent = `
      <h2>Новое сообщение с контактной формы</h2>
      <p><strong>От:</strong> ${name} (${email})</p>
      <p><strong>Тема:</strong> ${subject}</p>
      <p><strong>Сообщение:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    `;
    
    // Настройки письма
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER || '"Портфолио" <portfolio@example.com>',
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || 'vizenovsky@gmail.com', 
      subject: `Контактная форма: ${subject}`,
      html: htmlContent,
      replyTo: email // Для возможности ответить напрямую
    };
    
    // Отправка письма
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
    
    // Для ethereal.email показываем ссылку для просмотра письма
    if (process.env.NODE_ENV !== 'production') {
      console.log('Ссылка для просмотра письма: ', nodemailer.getTestMessageUrl(info));
    }
    
    return info;
    
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendReviewNotificationEmail = async ({ authorName, authorEmail, content }) => {
  try {
    const transporter = await createTransporter();

    const htmlContent = `
      <h2>Новый отзыв на сайте</h2>
      <p><strong>Автор:</strong> ${authorName} (${authorEmail})</p>
      <p><strong>Отзыв:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${String(content).replace(/\n/g, '<br>')}
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER || '"Portfolio" <portfolio@example.com>',
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || 'vizenovsky@gmail.com',
      subject: `Новый отзыв от ${authorName}`,
      html: htmlContent,
      replyTo: authorEmail,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Review notification sent:', info.messageId);
    if (process.env.NODE_ENV !== 'production') {
      console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    }
    return info;
  } catch (error) {
    console.error('Error sending review notification:', error);
    // не бросаем ошибку — уведомление не должно ломать создание отзыва
  }
};
