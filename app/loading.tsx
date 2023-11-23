import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-zinc-100 to-slate-300 flex items-center justify-center h-screen w-screen">
            <Loader2 className="w-10 h-10 text-red-600 animate-spin"></Loader2>
        </div>
    );
}
