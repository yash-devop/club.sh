import { Button, MaxWidthContainer } from "@club/ui";
import SignupButton from "./SignupButton";
import Link from "next/link";
import { getSessionFn } from "@/lib/auth/getSession";
import { ArrowRight, ChevronRight } from "lucide-react";
export default async function Navbar() {
  const session = await getSessionFn();

  return (
    <>
      <div className="min-h-[65px] h-full border-b flex items-center bg-white px-4">
        <MaxWidthContainer>
          <div className="h-full flex items-center justify-between">
            <p className="font-semibold text-2xl tracking-tighter">club.url</p>
            <div className="flex items-center justify-end gap-3">
              {session && session.user ? (
                <>
                  <Link href="/dashboard" rel="">
                    <SignupButton
                      name="Dashboard"
                      type="primary"
                      Icon={ChevronRight}
                      className="pl-3 pr-2"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/signin" rel="">
                    <SignupButton name="Get Started" type="primary" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </>
  );
}
