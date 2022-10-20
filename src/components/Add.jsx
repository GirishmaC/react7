import '../App.css'
import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from './pages/Actions';

const Add = () =>  {
    let count = useSelector(state => state.count);
    let dispatch = useDispatch();
    let temp = [];
    
    const update = () => {
        temp.push(count+1);

        dispatch(addStudent(temp));

    }
return(
        <div>
            <div className='texts'>
                <div>
                    <fieldset><legend>NAME</legend>
                        <input   id ="ip1" className='inp1' type="text" onChange={(e) => {temp[0] = e.target.value}}/>
                    </fieldset>
                </div>
                <div>
                    <fieldset><legend>AGE</legend>
                    <input id ="ip2" className='inp1' type="text" onChange={(e) => {temp[1] = e.target.value}}/>
                    </fieldset>
                </div>
                <div>
                    <fieldset><legend>COURSE</legend>
                    <input id ="ip3" className='inp1' type="text" onChange={(e) => {temp[2] = e.target.value}}/>
                    </fieldset>
                </div>
                <div>
                    <fieldset><legend>BATCH</legend>
                    <input id ="ip4" className='inp1' type="text" onChange={(e) => {temp[3] = e.target.value}}/>
                    </fieldset>
                </div>
            </div>

            <div className="fix-3">
                <Link to="/students"><button className='three' id='student-add'>CANCEL</button></Link>
                <Link to="/students"><button className='four' onClick={update} id='student-add'>UPDATE</button></Link>
            </div>
            

        </div>
    );
}

export default Add;