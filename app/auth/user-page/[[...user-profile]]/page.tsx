import { UserProfile, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function UserPage() {
  return (
    <div className="container mx-auto p-4">
      {/* Only render the user profile if the user is signed in */}
      <SignedIn>
        <UserProfile />
      </SignedIn>

      {/* Redirect users to the sign-in page if they're not signed in */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
