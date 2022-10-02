import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
           <Link className='px-3 text-success text-decoration-none fw-bold fs-4  rounded ' to='/'>Home</Link>
           <Link className='px-3 text-success text-decoration-none fw-bold fs-4 '  to='/about'>About</Link>
           <Link className='px-3 text-success text-decoration-none fw-bold fs-4 ' to='/academic'>Academic</Link>
           <Link className='px-3 text-success text-decoration-none fw-bold fs-4 ' to='/exam'>Exam</Link>
           <Link className='px-3 text-success text-decoration-none fw-bold fs-4 ' to='/result'>Result</Link>
           <Link className='px-3 text-success text-decoration-none fw-bold fs-4 ' to='/users'>Students Corner</Link>
            
        </div>
    );
};

export default Header;