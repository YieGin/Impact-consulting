import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/utils/mail';

export async function POST(req: NextRequest) {
    const { email, name, message } = await req.json();
    try {
      await sendMail({
        from: email,
        name: name,
        subject: 'User Message',
        body: message,
      });
      return new NextResponse('Mail sent successfully', { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Error sending email', { status: 500 });
    }
}
