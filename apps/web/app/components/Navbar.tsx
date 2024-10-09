import { MaxWidthContainer } from "@club/ui";
import SignupButton from "./SignupButton";

export default function Navbar() {
    return (
        <>
            <div className="min-h-[65px] h-full border-b flex items-center bg-white px-4">
                <MaxWidthContainer>
                    <div className="h-full flex items-center justify-between">
                        <p className="font-semibold text-2xl tracking-tighter">club.url</p>
                        <a href="/signin" rel="">
                            <SignupButton name="Get Started" type="primary" />
                        </a>
                    </div>
                </MaxWidthContainer>
            </div>
        </>
    )
}