// pages/api/auth/error.tsx (or pages/auth/error.tsx)

import { NextPage } from 'next';

const ErrorPage: NextPage = () => {
    return (
        <div>
            <h1>Authentication Error</h1>
            <p>Something went wrong with your authentication.</p>
        </div>
    );
};

export default ErrorPage;
