# Email SMTP Configuration Guide

## Environment Variables

Create a `.env.local` file in the `frontend/` directory with the following variables:

```env
# Required SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Optional Configuration
SMTP_SECURE=false          # Set to 'true' for port 465 (SSL)
SMTP_REJECT_UNAUTHORIZED=true  # Set to 'false' to allow self-signed certificates
SMTP_FROM=noreply@overdrivepermits.com  # Optional: override from email
SMTP_FROM_NAME=OVERDRIVE PERMITS  # Optional: sender name

# Admin Email (where notifications are sent)
ADMIN_EMAIL=admin@overdrivepermits.com
```

## Common SMTP Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password  # Use App Password, not regular password
```
**Note:** For Gmail, you need to:
1. Enable 2-Factor Authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password as `SMTP_PASS`

### Outlook/Office 365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
```

### Custom SMTP Server
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587  # or 465 for SSL
SMTP_USER=your_email@yourdomain.com
SMTP_PASS=your_password
SMTP_SECURE=false  # true for port 465
```

## Features

✅ **Automatic SMTP Connection Verification** - Tests connection before sending emails
✅ **HTML Email Templates** - Beautiful, branded email templates for admin and user
✅ **XSS Protection** - All user input is escaped to prevent injection attacks
✅ **Error Handling** - Detailed error messages for configuration issues
✅ **Dual Email Sending** - Sends notification to admin and confirmation to user
✅ **Reply-To Support** - Admin emails include customer email as reply-to address

## Testing

After setting up your `.env.local` file:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Submit a test permit request through the form

3. Check:
   - Admin email should be received at `ADMIN_EMAIL`
   - User confirmation email should be received at the submitted email address

## Troubleshooting

### "SMTP configuration is incomplete"
- Make sure all required variables (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`) are set in `.env.local`
- Restart the development server after adding environment variables

### "SMTP connection failed"
- Verify your SMTP credentials are correct
- For Gmail, make sure you're using an App Password, not your regular password
- Check if your SMTP provider requires specific ports or security settings
- Some providers block connections from unknown IPs - check your email provider's security settings

### "Failed to send notification email"
- Check that `ADMIN_EMAIL` is set correctly
- Verify your SMTP account has permission to send emails
- Check spam/junk folders

### Emails not received
- Check spam/junk folders
- Verify email addresses are correct
- Check SMTP provider's sending limits
- Review server logs for detailed error messages

