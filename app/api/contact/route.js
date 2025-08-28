import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, contact, message } = await request.json();

    // 创建邮件传输器 (使用Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // 你的Gmail地址
        pass: process.env.EMAIL_PASS, // 你的Gmail应用密码
      },
    });

    // 邮件配置
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'chloe.yiching.chu@gmail.com',
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <h3>Nouveau message depuis votre portfolio</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.' 
    });

  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
    }, { status: 500 });
  }
}
