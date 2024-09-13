import { AuthLayout } from "@/app/components/AuthLayout";
import { LoginForm } from "./form";

export default function SigninPage(){
    return (
        <>
            <AuthLayout variant="login">
                <LoginForm />
            </AuthLayout>
        </>
    )
}