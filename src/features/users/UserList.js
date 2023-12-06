import React from 'react' ;
import Boutton from '../../components/Boutton';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './UserSlice';





const UserList = () => {

    const users = useSelector(store => store.users) ;

    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        dispatch(deleteUser({id})) ;
        console.log(id) ;
    }

  return (
        <div className='container'>
        <h2>Students Management System</h2>
        <Link to="/add-user"><Boutton>Create New Student</Boutton></Link>
        
        <table className='table'>
            <thead>
                <tr>
                    
                    <th>Name</th>
                    <th>lastName</th>
                    <th>DateOfBirth</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user , index) => (
                    <tr key={user.id}>
                        
                        <td> {user.name} </td>
                        <td> {user.lastName} </td>
                        <td> {user.dateOfBirth} </td>
                        <td>
                            <Link to= {`edit-user/${user.id}`} ><button type="button" className="btn btn-primary ms-2">Update</button></Link>
                            
                            <button type="button" className="btn btn-danger ms-2" 
                            onClick = {() => handleDeleteUser(user.id)}>Delete</button>
                        </td>
                        
                    </tr>
                ))} 

            </tbody>
        </table>
      
    </div>
    
  )
}

export default UserList ;
