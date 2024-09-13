import { AuthLayout } from "@/app/components/AuthLayout";
import { RegisterForm } from "./form";

export default function SignupPage(){
    return (
        <>
            <AuthLayout variant="register">
                <RegisterForm />
            </AuthLayout>
        </>
    )
}