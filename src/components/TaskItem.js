import React from 'react';
import { Component } from 'react';
class TaskItem extends Component {
    render(){
        var {task,index} = this.props;
        return (
          <tr>
              <td>{ index + 1 }</td>
              <td>{ task.Name }</td>
              <td className="text-center">
                  <span className="label label-success">
                              Kích Hoạt
                          </span>
              </td>
              <td className="text-center">
                  <button type="button" className="btn btn-warning">
                      <span className="fa fa-pencil mr-5"></span>Sửa
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-danger">
                      <span className="mr-5"></span>Xóa
                  </button>
              </td>
          </tr>
        );
    }
    
}

export default TaskItem;
