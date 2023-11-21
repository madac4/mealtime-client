import React from 'react';

export default function ErrorMessage({ error }: { error: any }) {
    let errorData;
    if (error) {
        if ('data' in error) {
            errorData = error as any;
        }
    }
    return <span className="text-red-500">{errorData.data.message}</span>;
}
