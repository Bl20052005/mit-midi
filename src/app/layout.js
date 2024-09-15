import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body>
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
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
