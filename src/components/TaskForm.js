import React  from 'react';

function TaskForm() {
  return (
    <div className="panel panel-warning">
    <div className="panel-heading">
        <h3 className="panel-title">Thêm Công Việc
        {/* <span className="fa fa-times-circle text-right"></span> */}
        </h3>
    </div>
    <div className="panel-body">
        <form>
            <div className="form-group">
                <label>ID :</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Name :</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>IsCompleted :</label>
                <input type="date" className="form-control" />
            </div>
            <div className="form-group">
                <label>Dealine :</label>
                <input type="date" className="form-control" />
            </div>
            <br/>
            <div className="text-center">
                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
            </div>
        </form>
    </div>
    </div>
  );
}

export default TaskForm;
