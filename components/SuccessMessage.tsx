import React from 'react';

export default function SuccessMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-3 bg-green-200 rounded-sm flex items-center gap-2">
            {children} <span className="text-lg">✅</span>
        </div>
    );
}
