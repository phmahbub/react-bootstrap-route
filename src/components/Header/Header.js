import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Link className='px-3 ' to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/exam'>Exam</Link>
            
        </div>
    );
};

export default Header;