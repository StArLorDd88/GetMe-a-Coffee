import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import connectDB from '@/utils/connectdb';
import { User } from '@/models/user';

export async function POST() {
  console.log("🔥 POST /api/user called");

  const { userId } = auth();
  console.log("🔐 userId from auth:", userId);

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const clerkUser = await currentUser();
  if (!clerkUser) {
    return new NextResponse('User not found', { status: 404 });
  }

  await connectDB();
  console.log("✅ Connected to DB");

  try {
    let user = await User.findOne({ clerkId: clerkUser.id });
    console.log("👀 Found user?", user);

    if (!user) {
      user = await User.create({
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        username: clerkUser.username || clerkUser.firstName || 'user',
      });
      console.log("🎉 Created new user:", user);
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("❌ Error in POST /api/user:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
