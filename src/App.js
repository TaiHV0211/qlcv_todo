import React ,{Component} from 'react';
import './App.css';
import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


// constructor(props){
//   super(props);
//   this.state ={
//     tasks:[]
//   }
// }
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      task : []
    }
  }
  componentWillUnmount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
        this.setState({
          tasks : tasks
        });
    }
  }
  GenerateData =() => {
    var randomstring = require("randomstring");
    var tasks = [
      {
        Id : randomstring.generate(7),
        Name : "Hồ Văn Tài",
        IsCompleted: "12/09/2021",
        Dealine: "12/09/2021"
      },
      {
        Id :  randomstring.generate(7) ,
        Name : "Lương Thị Thơm",
        IsCompleted: "12/09/2021",
        Dealine: "12/09/2021"
      }
    ];
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  render(){
    var {tasks} = this.state;
    return (
      <div className="container">
      <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
      </div>
      <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm></TaskForm>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button type="button" className="btn btn-primary">
                  <span className="mr-5"></span>Thêm Công Việc
              </button>
  
              <button 
                    type="button" 
                    className="mr-5 btn btn-danger" 
                    onClick= {this.GenerateData}
              >
                    Generate Data
              </button>
              <Control></Control>
              <TaskList tasks = { tasks }></TaskList>
            </div>
          </div>
      </div>
  
    );
  }
  
}

export default App;
