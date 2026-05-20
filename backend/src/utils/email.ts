export async function sendEmail(to: string, subject: string, html: string) {
  // In production, wire SMTP service or transactional email provider
  // This is an extensible placeholder for Mailgun, SendGrid, or SES.
  // eslint-disable-next-line no-console
  console.info(`Sending email to ${to} with subject ${subject}`);
  return Promise.resolve(true);
}
