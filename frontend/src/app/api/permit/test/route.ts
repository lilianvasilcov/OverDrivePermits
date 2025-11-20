import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(request: NextRequest) {
  // Only allow in development mode
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { error: 'This endpoint is only available in development mode' },
      { status: 403 }
    );
  }

  try {
    // Check environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = process.env.SMTP_PORT || '587';

    const config = {
      hasHost: !!smtpHost,
      hasUser: !!smtpUser,
      hasPass: !!smtpPass,
      host: smtpHost || 'NOT SET',
      port: smtpPort,
      user: smtpUser ? `${smtpUser.substring(0, 3)}***` : 'NOT SET',
      pass: smtpPass ? '***SET***' : 'NOT SET',
    };

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({
        status: 'error',
        message: 'SMTP configuration is incomplete',
        config,
        required: {
          SMTP_HOST: 'Your SMTP server (e.g., smtp.gmail.com)',
          SMTP_PORT: 'Port number (587 for TLS, 465 for SSL)',
          SMTP_USER: 'Your email address',
          SMTP_PASS: 'Your email password or app password',
        },
      });
    }

    // Try to create transporter
    let transporter: nodemailer.Transporter;
    try {
      const isSecure = parseInt(smtpPort) === 465 || process.env.SMTP_SECURE === 'true';

      if (smtpHost.includes('gmail.com')) {
        transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });
      } else {
        transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort),
          secure: isSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
          },
        } as nodemailer.TransportOptions);
      }
    } catch (createError: any) {
      return NextResponse.json({
        status: 'error',
        message: 'Failed to create SMTP transporter',
        error: createError.message,
        config,
      });
    }

    // Try to verify connection
    try {
      await transporter.verify();
      return NextResponse.json({
        status: 'success',
        message: 'SMTP configuration is valid and connection successful!',
        config,
      });
    } catch (verifyError: any) {
      return NextResponse.json({
        status: 'warning',
        message: 'SMTP configuration created but verification failed',
        error: verifyError.message,
        errorCode: verifyError.code,
        config,
        note: 'Some SMTP servers do not support verification. Try sending a test email.',
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: 'Unexpected error',
      error: error.message,
      stack: error.stack,
    });
  }
}

