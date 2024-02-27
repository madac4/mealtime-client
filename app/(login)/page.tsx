import LoginForm from '@/components/forms/LoginForm';

export default function Login() {
    return (
        <div className="flex h-screen w-screen items-center flex-col justify-center container">
            <img src="/images/logo.png" alt="" className="w-32 mb-10" />
            <LoginForm />
        </div>
    );
}
