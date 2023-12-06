import { useState } from "react" ;
import { useDispatch, useSelector } from "react-redux" ;
import { useNavigate, useParams } from "react-router-dom" ;
import Boutton from "../../components/Boutton" ;
import TextField from "../../components/TextField" ;
import { editUser } from "./UserSlice" ;

const EditUser = () => {

  const params = useParams() ; 

  const dispatch = useDispatch();

  const users = useSelector(store => store.users) ;
  

  const navigate = useNavigate() ;

  
  const existingUser = users.filter(user => user.id === params.id);
  

  const { name , lastName , dateOfBirth } = existingUser[0];  
 

  const [values , setValues] = useState({
    name ,
    lastName  ,
    dateOfBirth  ,
  }) ;

  const handleEditStudent = () => {
    setValues({ name : '' , lastName : '' , dateOfBirth : ''} ) ;
    dispatch(editUser({
      id: params.id,
      name: values.name,
      lastName : values.lastName ,
      dateOfBirth : values.dateOfBirth 
    }));
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

        <Boutton onClick={handleEditStudent}>Update</Boutton>
    </div>
  )
}

export default EditUser ;
