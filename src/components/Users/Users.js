import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Student from '../Student/Student';
import './Users.css'

const Users = () => {
    const students = useLoaderData()
    console.log(students)
    return (

        <div>
            <h1>Student Information:  {students.length}</h1>
            {
                students.map(student=>(
                    <Student className='student-info' key={student.id} student= {student}></Student>
                ))
            }
        </div>
    );
};

export default Users;