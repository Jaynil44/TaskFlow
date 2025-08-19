import './App.css'
import {useEffect, useState} from 'react'
import Login from './Components/Auth/Login'
import CreateTask from './Components/Others/CreateTask'
import Header from './Components/Others/Header'
import TaskListNumbers from './Components/Others/TaskListNumbers'
import { get_localstorage, set_localstorage} from './Utilities/localStorage'
import AdminDB from './Components/Dashboard/AdminDB'
import EmployeeDB from './Components/Dashboard/Employee'
import { AuthContext } from './Context/AuthContext'

function App() {
  const [user_Data, setUserData] = useState({});
  const [logged_in_data, setLogged_in_data] = useState(null);
  const [user, setUser] = useState(null);

  const validator = (email, pswrd, v) => {
    return v.find((e) => email == e.email && e.password == pswrd);
  }
  // localStorage.clear();
  useEffect(() => {
    set_localstorage();
    const {employee_data, admin_data} = get_localstorage();
    setUserData({employee_data, admin_data});

    const loggedInDetails = localStorage.getItem('logged_in_details');

    if (loggedInDetails) {
      const details = JSON.parse(loggedInDetails);
      // console.log('inside checking useEffect', details);
      // Use the saved 'role' to set the state
      if (details.role) {
        setUser(details.role);
        setLogged_in_data(details);
      }
    }
  }, []);
  
  const handle_login = (email, pswrd) => {
      // console.log('logging in', email, pswrd);
      const { employee_data, admin_data } = user_Data;

      if (validator(email, pswrd, admin_data)) {
        const details = validator(email, pswrd, admin_data);
        setUser('admin');
        setLogged_in_data(details);
        localStorage.setItem('logged_in_details', JSON.stringify(details));
      }

      else if (validator(email, pswrd, employee_data)) {
        setUser('employee');
        const details = validator(email, pswrd, employee_data);
        setLogged_in_data(details);
        localStorage.setItem('logged_in_details', JSON.stringify(details));
      }

      else {
        alert('you are not authorised person !!!');
      }
  }

  const handleLogout = () => {
    console.log('logout clicked');  
    localStorage.removeItem('logged_in_details'); // Use removeItem for clarity
    setLogged_in_data(null); // Reset state to null
    setUser(null); // Reset user to null
  };
  //for debugging => checking weather the user is set or not...!!

  // useEffect(()=>{
  //   console.log("new_user" , user);
  // }, [user]);

  return (
    <>
      {user === 'admin' ? (
      <AdminDB data={logged_in_data} onLogout={handleLogout} />
    ) : user === 'employee' ? (
      <EmployeeDB data={logged_in_data} onLogout={handleLogout} />
    ) : (
      // Render the Login page only if user is null (not logged in)
      <Login handle_login={handle_login} />
    )}    </>
  )
}

export default App
