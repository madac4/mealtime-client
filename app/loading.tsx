import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-gradient-to-tr from-zinc-100 to-slate-300 flex items-center justify-center h-screen w-screen">
            <Loader2 className="w-10 h-10 text-red-600 animate-spin"></Loader2>
        </div>
    );
}
