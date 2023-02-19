import { Component, useState, useEffect } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      age: ''
    }
  };

  onIncrement = () => this.setState(prevState => ({ count: prevState.count + 1 }));
  onDecrement = () => this.setState(prevState => ({ count: prevState.count - 1 }));
  onToggle = () => this.setState(prevState => ({ Login: !prevState.isLogin }));
  onReset = () => this.setState({ count: 0 })
  onChangeHandler = e => this.setState({ age: e.target.value });
  componentDidMount() {
    document.title = `Counter:  ${this.state.count}`
    console.log('Mounting');
  }
  componentDidUpdate() {
    document.title = `Counter:  ${this.state.count}`
    console.log('Updating');
  }
  componentWillUnmount() {
    document.title = `Counter:  ${this.state.count}`
    console.log('Unmounting');
  }

  render() {
    const { firstName, lastName, link } = this.props
    const { age, count } = this.state
    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt-5">
          <h4>MMening ismim {firstName}, sharifim {lastName}, yoshim {age}</h4>
          <a href={link}>Telegram kanalim</a>
        </div>
        <div className="mt-3">
          <button className="btn btn-success" onClick={this.onIncrement}>Increment</button>
          <button className="btn btn-danger mx-2" onClick={this.onDecrement}>Decrement</button>
          <button className="btn btn-info" onClick={this.onReset}>Reset</button>
          <p>{count}</p>
        </div>
        <form>
          <span>Yoshingiz</span>
          <input type="text" className="form-control" onChange={e => this.onChangeHandler(e, 'muzaffar')} />
        </form>
        <p>Login User</p>
        <button className="btn btn-info" onClick={this.onReset}>Toggle Login</button>
      </div>
    )
  }
}

// const User = ({firstName, lastName, link}) => {

//   const [counter, setCount] = useState(0)
//   const[isLogin, setIsLogin] = useState(false)
//   const onIncrement = () =>{
//     setCount(prevCounter => prevCounter + 1)
//     setCount(prevCounter => prevCounter + 1)
//   }
//   const onDecrement = () =>{
//     setCount(prevCounter => prevCounter - 1)
//   }
//   const onReset = () =>{
//     setCount(0)
//   }

//   const onToggleButton = () =>{
//     setIsLogin(prevState => !prevState)
//   }

//   return (
//     <div className="w-50 mx-auto">
//       <div className="border  p-3 mt-2">
//         <h4>Salom mening ismim - {firstName}, sharifim - {lastName}</h4>
//         <a href='{link}'>Telegram profilim</a>
//         <div>
//           <p className="text-center">Count =  {counter}</p>
//         </div>
//         <div className="d-flex justify-content-center">
//           <button className="btn btn-success" onClick={onIncrement}>+</button>
//           <button className="btn btn-danger" onClick={onDecrement}>-</button>
//           <button className="btn btn-dark" onClick={onReset}>0</button>
//         </div>
//         <div className="justify-content-center">
//         </div>
//         <div className="d-flex justify-content-center">
//           {isLogin ? <p className="text-center">Login</p> : null}
//           <button className="btn btn-outline-primary" onClick={onToggleButton}>Toggle</button>
//         </div>
//       </div>
//     </div>  
//   );
// }


const App = () => {
  return (
    <div>
      <User firstName='Muzaffar' lastName='Orziboyev' link='t.me://rehpargotyrC' />
      <User firstName='Umar' lastName='Abdullayev' link='t.me://rehpargotyrC' />
    </div>
  );
}

export default App;
