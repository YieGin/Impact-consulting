import { NextRequest, NextResponse } from 'next/server';
import { sendVolunteer } from '@/utils/volunteerTouch';

export async function POST(req: NextRequest) {
    const { email, firstName, lastName, phoneNumber, selectedProduct } = await req.json();
    try {
      await sendVolunteer({
        from: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        selectedProduct: selectedProduct,
        subject: 'User Message',
      });
      return new NextResponse('Mail sent successfully', { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Error sending email', { status: 500 });
    }
}
