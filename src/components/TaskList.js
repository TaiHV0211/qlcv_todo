import React from 'react';
import { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
    render(){
        var {tasks} = this.props;
        var elgTask = tasks.map((task, index) =>{
            return <TaskItem key={task.Id} index ={index} task={task}></TaskItem>
        }); 
      return (
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">IsCompleted</th>
                            <th className="text-center">Dealine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <input type="date" className="form-control" />
                            </td>
                            <td><input type="date" className="form-control" /></td>
                        </tr>
                        { elgTask }
                    </tbody>
                </table>
            </div>
        </div>
      );
    } 
}

export default TaskList;
