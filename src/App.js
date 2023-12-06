import { Route, Routes } from 'react-router';
import './App.css';
import UserList from './features/users/UserList';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
    </Routes>
  );
}

export default App;
