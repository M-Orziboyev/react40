import { Component, React} from "react";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      age: ''
    }
  };

  onChangeHandler = e => {
    this.setState({
      age: e.target.value
    });
  }

  render() {
    const {firstName, lastName} = this.props
    console.log(this.props)
    return (
      <div className="w-50 mx-auto">
        <div className="border  p-3 mt-2">
          <h4>Salom mening ismim - {firstName}, sharifim - {lastName}, yoshim - {this.state.age}</h4>
          <a href='{link}'>Telegram profilim</a>
          <div>
            <button className="btn btn-info m-3" onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
            <button className="btn btn-danger m3 " onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>
            <button className="btn btn-success m-3" onClick={() => this.setState({count:this.state.count = 0})}>Reset</button>
          </div>
          <div>
            <p>Count = {this.state.count}</p>
          </div>
        <form>
          <span>Yoshingiz</span>
          <input type="text" className="form-control" onChange={this.onChangeHandler} />
        </form>
        </div>
      </div>  
    );
  }
}


const App = () =>{
  return (
    <div>
      <User firstName='Muzaffar' lastName='Orziboyev' link='t.me://rehpargotyrC'/>
      <User firstName='Umar' lastName='Abdullayev' link='t.me://rehpargotyrC'/>
    </div>
  );
}

export default App;
