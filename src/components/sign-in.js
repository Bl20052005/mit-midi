import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "../app/globals.css";

export default function RootLayout() {
  return (
    <ClerkProvider>

          <SignedOut>
            <SignInButton>
              {/* Add inline styles for red color */}
              <button class="sign">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div class="isIn">
              <UserButton />
            </div>
            
          </SignedIn>
    </ClerkProvider>
  );
}
