import React from 'react';
import {Link} from "react-router-dom"
import '../App.css'
import { useSelector } from 'react-redux';
const Students = () => {
    const c = useSelector(state => state.count);
    let students = useSelector(state => state.Students);
const StudentCount = (count) => {
        console.log("green flag");
        return (
            <>
                {students.map((student) => {let ren =(<>
                        <div className="fix-1">{student[0]}</div>
                        <div className="fix-1">{student[1]}</div>
                        <div className="fix-1">{student[2]}</div>
                        <div className="fix-1">{student[3]}</div>
                        <div className="fix-1 "><Link to={{pathname:"/students/edit",  search:`?n=${student[4]}`}}><p id="fix-2">edit</p> </Link>
                        </div>
                        </>)
                        return ren;
                        })} 
            </>
        )
    }

    return(
        <div>

    
                <div id="student-header">
                    <div>
                        <h1 id="student-title">Student Details</h1>
                    </div>
                    <div>
                        <Link to="add"><button id="student-add">Add Student</button></Link> 
                    </div>

                    <div id="student-table">
                        <div className="fix-1"><strong>Name</strong> </div>
                        <div className="fix-1"><strong>Age</strong></div>
                        <div className="fix-1"><strong>Course</strong></div>
                        <div className="fix-1"><strong>Batch</strong></div>
                        <div className="fix-1"><strong>Change</strong></div>


                        {StudentCount(c)}
                        
                    </div>
                </div>

            
        </div>
    );
}


export default Students;