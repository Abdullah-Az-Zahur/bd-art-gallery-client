import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Link to='/' className='items-center mx-auto justify-center'><button className='btn btn-primary'>Back to Home</button></Link>
            <h2 className='text-center text-3xl font-bold text-red-600'>Error 404</h2>
        </div>
    );
};

export default ErrorPage;