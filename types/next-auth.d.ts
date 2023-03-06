import { Profile } from '@/models/profile';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    profile: Profile;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends Profile {}
}
