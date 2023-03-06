import NextAuth, { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || '',
  providers: [

  ],
  callbacks: {
    // async session({ session, token }) {
    //   const user = await prisma.user.findMany({
    //     where: { id: token.id, },
    //     include: {
    //       profile: true,
    //     }
    //   });

    //   session.user = user[0];
    //   return session
    // },

    // async jwt({ token, user, account, profile, }) {
    //   if (account) {
    //     const { provider } = account;
    //     if (provider === 'github') {
    //       const user = await handleGithub(profile as GithubProfile);

    //       return {
    //         id: user.id,
    //         name: user.profile?.name || '',
    //       };
    //     }
    //   }

    //   return token;
    // }
  }
}

export default NextAuth(authOptions);
