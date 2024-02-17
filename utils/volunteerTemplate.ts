type EmailTemplateParams = {
  from: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  selectedProduct: string;
};

export function getVolunteerTemplate({ from, firstName, lastName, phoneNumber, selectedProduct }: EmailTemplateParams): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User Message</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #11161b;  display: flex; align-items: center; justify-content: center;">
    <div style="width: 600px; max-height: 100vh; margin: 20px auto; padding: 20px; background: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <img src="https://i.ibb.co/BNfzDYJ/Logo.png" alt="Logo" style="display: block; margin-left: auto; margin-right: auto; width: 100px;" />
        <h2 style="color: #333333; text-align: center;">New Message Received</h2>
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>From:</strong> ${from}</p>
          <p><strong>Phone number:</strong> ${phoneNumber}</p>
          <p><strong>Selected:</strong> ${selectedProduct}</p>
        </div>
        <footer style="text-align: center; color: #888888; font-size: 12px; margin-top: 20px;">
          This email was sent from the contact form on <a style="color: #2F4F4F;" href='http://localhost:3000'>Diana.com</a>
        </footer>
      </div>
    </body>
    </html>
  `;
}
