import React from 'react';
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

function Employee({data, onLogout  }) {
    // console.log(data);
    const newData=localStorage.getItem(data.role);
    console.log(newData);
    return (
        <div>
            <Header data = {data} onLogout={onLogout}/>
            <TaskListNumbers data = {data}/>
            <TaskList data={data}/>
        </div>
    );
}

export default Employee;