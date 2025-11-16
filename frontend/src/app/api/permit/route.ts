import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PermitRequest } from '../../../../shared/types/permit.types';

// Email service configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Generate admin email template (enhanced with better branding)
const generateAdminEmailTemplate = (data: PermitRequest): string => {
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'N/A';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
            line-height: 1.6; 
            color: #1F2937; 
            background-color: #F9FAFB;
          }
          .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #FFFFFF;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header { 
            background: linear-gradient(135deg, #DC143C 0%, #B71C1C 100%); 
            color: white; 
            padding: 32px 24px; 
            text-align: center;
          }
          .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.02em;
          }
          .header p {
            font-size: 14px;
            opacity: 0.9;
          }
          .content { 
            padding: 32px 24px; 
            background: #FFFFFF;
          }
          .section {
            margin-bottom: 32px;
          }
          .section:last-child {
            margin-bottom: 0;
          }
          .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #1E3A8A;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #E5E7EB;
          }
          .field { 
            margin-bottom: 16px; 
            padding: 12px;
            background: #F9FAFB;
            border-radius: 8px;
            border-left: 3px solid #1E3A8A;
          }
          .field:last-child {
            margin-bottom: 0;
          }
          .label { 
            font-weight: 600; 
            color: #374151;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 4px;
          }
          .value { 
            color: #1F2937;
            font-size: 15px;
          }
          .footer {
            background: #F9FAFB;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #E5E7EB;
            color: #6B7280;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>🚛 New Permit Request</h1>
            <p>OVERDRIVE PERMITS</p>
          </div>
          <div class="content">
            <div class="section">
              <div class="section-title">Customer Information</div>
            <div class="field">
                <div class="label">Full Name</div>
              <div class="value">${data.customerName}</div>
            </div>
            <div class="field">
                <div class="label">Email Address</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
                <div class="label">Phone Number</div>
              <div class="value">${data.phone}</div>
            </div>
            ${data.companyName ? `
            <div class="field">
                <div class="label">Company Name</div>
              <div class="value">${data.companyName}</div>
            </div>
            ` : ''}
            </div>
            
            <div class="section">
              <div class="section-title">Permit Details</div>
            <div class="field">
                <div class="label">Permit Type</div>
                <div class="value">${data.permitType.charAt(0).toUpperCase() + data.permitType.slice(1)}</div>
            </div>
            <div class="field">
                <div class="label">State</div>
              <div class="value">${data.state}</div>
            </div>
            ${data.route ? `
            <div class="field">
                <div class="label">Route</div>
              <div class="value">${data.route}</div>
            </div>
            ` : ''}
            ${data.startDate ? `
            <div class="field">
                <div class="label">Start Date</div>
                <div class="value">${formatDate(data.startDate)}</div>
            </div>
            ` : ''}
            ${data.endDate ? `
            <div class="field">
                <div class="label">End Date</div>
                <div class="value">${formatDate(data.endDate)}</div>
              </div>
              ` : ''}
            </div>
            
            ${data.cargoWeight || data.cargoDimensions || data.cargoType ? `
            <div class="section">
              <div class="section-title">Cargo Information</div>
            ${data.cargoWeight ? `
            <div class="field">
                <div class="label">Weight</div>
              <div class="value">${data.cargoWeight}</div>
            </div>
            ` : ''}
            ${data.cargoDimensions ? `
            <div class="field">
                <div class="label">Dimensions</div>
              <div class="value">${data.cargoDimensions}</div>
            </div>
            ` : ''}
            ${data.cargoType ? `
            <div class="field">
                <div class="label">Cargo Type</div>
              <div class="value">${data.cargoType}</div>
            </div>
            ` : ''}
            </div>
            ` : ''}
            
            ${data.notes ? `
            <div class="section">
              <div class="section-title">Additional Notes</div>
            <div class="field">
              <div class="value">${data.notes}</div>
              </div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This is an automated notification from OVERDRIVE PERMITS</p>
            <p style="margin-top: 8px;">Please respond to this request as soon as possible.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Generate user confirmation email template
const generateUserConfirmationTemplate = (data: PermitRequest): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
            line-height: 1.6; 
            color: #1F2937; 
            background-color: #F9FAFB;
          }
          .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #FFFFFF;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header { 
            background: linear-gradient(135deg, #DC143C 0%, #B71C1C 100%); 
            color: white; 
            padding: 40px 24px; 
            text-align: center;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 12px;
            letter-spacing: -0.02em;
          }
          .header p {
            font-size: 16px;
            opacity: 0.95;
          }
          .content { 
            padding: 40px 24px; 
            background: #FFFFFF;
          }
          .success-icon {
            text-align: center;
            font-size: 64px;
            margin-bottom: 24px;
          }
          .message {
            text-align: center;
            margin-bottom: 32px;
          }
          .message h2 {
            font-size: 22px;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 12px;
          }
          .message p {
            font-size: 16px;
            color: #6B7280;
            line-height: 1.7;
          }
          .details-box {
            background: #F9FAFB;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 32px;
            border: 1px solid #E5E7EB;
          }
          .details-box h3 {
            font-size: 16px;
            font-weight: 600;
            color: #1E3A8A;
            margin-bottom: 16px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #E5E7EB;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .detail-label {
            font-weight: 500;
            color: #6B7280;
            font-size: 14px;
          }
          .detail-value {
            font-weight: 600;
            color: #1F2937;
            font-size: 14px;
            text-align: right;
          }
          .cta-box {
            background: linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%);
            color: white;
            padding: 24px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 32px;
          }
          .cta-box h3 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .cta-box p {
            font-size: 14px;
            opacity: 0.9;
          }
          .footer {
            background: #F9FAFB;
            padding: 32px 24px;
            text-align: center;
            border-top: 1px solid #E5E7EB;
          }
          .footer p {
            color: #6B7280;
            font-size: 14px;
            margin-bottom: 8px;
          }
          .footer a {
            color: #1E3A8A;
            text-decoration: none;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Thank You, ${data.customerName}!</h1>
            <p>Your permit request has been received</p>
          </div>
          <div class="content">
            <div class="success-icon">✅</div>
            <div class="message">
              <h2>Request Submitted Successfully</h2>
              <p>We&apos;ve received your permit request and our team will review it shortly. You can expect to hear from us within 1-3 business days.</p>
            </div>
            
            <div class="details-box">
              <h3>Request Summary</h3>
              <div class="detail-row">
                <span class="detail-label">Permit Type:</span>
                <span class="detail-value">${data.permitType.charAt(0).toUpperCase() + data.permitType.slice(1)}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">State:</span>
                <span class="detail-value">${data.state}</span>
              </div>
              ${data.route ? `
              <div class="detail-row">
                <span class="detail-label">Route:</span>
                <span class="detail-value">${data.route}</span>
              </div>
              ` : ''}
            </div>
            
            <div class="cta-box">
              <h3>What&apos;s Next?</h3>
              <p>Our permit specialists will review your request and contact you with a quote and next steps. If you have any questions, feel free to reach out to us.</p>
            </div>
          </div>
          <div class="footer">
            <p><strong>OVERDRIVE PERMITS</strong></p>
            <p>Your trusted partner for trucking permits across all 50 US states</p>
            <p style="margin-top: 16px;">
              <a href="mailto:admin@overdrivepermits.com">Contact Us</a> | 
              <a href="#">View Our Website</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const data: PermitRequest = await request.json();

    // Basic validation
    if (!data.customerName || !data.email || !data.phone || !data.state) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send emails
    const transporter = createTransporter();
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@overdrivepermits.com';
    const fromEmail = process.env.SMTP_USER || 'noreply@overdrivepermits.com';

    // Send admin notification email
    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      subject: `New Permit Request - ${data.state} - ${data.permitType}`,
      html: generateAdminEmailTemplate(data),
    });

    // Send user confirmation email
    try {
      await transporter.sendMail({
        from: fromEmail,
        to: data.email,
        subject: 'Permit Request Received - OVERDRIVE PERMITS',
        html: generateUserConfirmationTemplate(data),
      });
    } catch (emailError) {
      // Log error but don't fail the request if user email fails
      console.error('Failed to send user confirmation email:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Permit request submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting permit request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit permit request' },
      { status: 500 }
    );
  }
}

