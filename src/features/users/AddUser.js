import React, { useState } from 'react' ;
import TextField from '../../components/TextField';
import Boutton from '../../components/Boutton';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid' ;
import { addUser } from './UserSlice';

const AddUser = () => {

  const dispatch = useDispatch() ;

  const navigate = useNavigate() ;

  const [values , setValues] = useState({
    name : '' ,
    lastName : '' ,
    dateOfBirth : '' ,
  }) ;

  const handleAddStudent = () => {
    setValues({ name : '' , lastName : '' , dateOfBirth : ''} ) ;
    dispatch(addUser({
      id : uuidv4() ,
      name : values.name ,
      lastName : values.lastName ,
      dateOfBirth : values.dateOfBirth
    })) ;
    navigate('/' ) ;

    }

  return (
    <div className="mt-5 container mx-auto"> 
      
      <TextField 
        id="studentName"
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values , name : e.target.value })}
        inputProps = {{ type : 'text' , placeholder : 'entrez votre nom'}}  />
      <TextField 
        id="studentlastName"
        label="lastName"
        value={values.lastName}
        onChange={(e) => setValues({ ...values , lastName : e.target.value })}
        inputProps = {{ type : 'text' , placeholder : 'entrez votre Prenom'}}  />
      <TextField 
        id="studentDateOB"
        label="Date Of Birth"
        value={values.dateOfBirth}
        onChange={(e) => setValues({ ...values , dateOfBirth : e.target.value })}
        inputProps = {{ type : 'text' , placeholder : 'entrez la date de naissance'}}  />

        <Boutton onClick={handleAddStudent}>Submit</Boutton>
    </div>
  )
}

export default AddUser ;
