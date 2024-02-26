import { Viewport } from 'next';
import { FC } from 'react';

interface HeadProps {
    title: string;
    description: string;
    keywords: string;
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

const Heading: FC<HeadProps> = ({ title, description, keywords }) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </>
    );
};

export default Heading;
