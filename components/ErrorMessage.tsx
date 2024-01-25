import React from 'react';

export default function ErrorMessage({ error, type }: { error: any; type?: 'text' | 'block' }) {
    let errorData;
    if (error) {
        if ('data' in error) {
            errorData = error as any;
            console.log(errorData);
        }
    }
    return (
        <>
            {type === 'text' ? (
                <span className="text-red-500">
                    {errorData
                        ? errorData.data.message
                        : 'Ceva nu am mers bine, încearcă in 5 minute.'}
                </span>
            ) : (
                <div className="p-3 bg-red-200 mt-3 rounded-sm flex items-center gap-2">
                    <>
                        {errorData
                            ? errorData.data.message
                            : 'Ceva nu am mers bine, încearcă in 5 minute.'}
                    </>
                    <span className="text-lg">❌</span>
                </div>
            )}
        </>
    );
}
