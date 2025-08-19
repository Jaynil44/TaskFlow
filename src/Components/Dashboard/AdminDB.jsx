import React from 'react';
import CreateTask from '../Others/CreateTask';
import Header from '../Others/Header';
import AllTask from '../Others/AllTask';

function AdminDB({data, onLogout}) {
    // console.log('inside admin : ' , data);
    // console.log('inside admin : ' , onLogout);
    return (
        <div>
            <Header data={data} onLogout={onLogout}/>
            <CreateTask/>
            <AllTask data={data}/>
        </div>
    );
}

export default AdminDB;