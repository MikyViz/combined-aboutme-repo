/**
 * EmailJS конфигурация
 * 
 * Эти значения используются для формы обратной связи.
 * Они не считаются секретными, так как EmailJS публичные ключи должны быть доступны на клиенте.
 * 
 * Мы используем жестко закодированные значения вместо переменных окружения,
 * чтобы избежать проблем с развертыванием на GitHub Pages.
 * 
 * В этой конфигурации:
 * - serviceId: ID сервиса EmailJS
 * - templateId: ID шаблона EmailJS
 * - publicKey: Публичный ключ EmailJS
 */
export const emailjsConfig = {
  serviceId: 'service_i6cprhq',
  templateId: 'template_a6e7pvc',
  publicKey: 'OQDs5nkCbN6Q5ynqe'
};
