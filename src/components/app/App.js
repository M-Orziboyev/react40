import { useCallback, useState, useMemo, useRef, useEffect   } from "react";
import CounterItem from "../counter-item/CounterItem";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       age: ''
//     }
//   };

//   onIncrement = () => this.setState(prevState => ({ count: prevState.count + 1 }));
//   onDecrement = () => this.setState(prevState => ({ count: prevState.count - 1 }));
//   onToggle = () => this.setState(prevState => ({ Login: !prevState.isLogin }));
//   onReset = () => this.setState({ count: 0 })
//   onChangeHandler = e => this.setState({ age: e.target.value });
//   componentDidMount() {
//     document.title = `Counter:  ${this.state.count}`
//     console.log('Mounting');
//   }
//   componentDidUpdate() {
//     document.title = `Counter:  ${this.state.count}`
//     console.log('Updating');
//   }
//   componentWillUnmount() {
//     document.title = `Counter:  ${this.state.count}`
//     console.log('Unmounting');
//   }

//   render() {
//     const { firstName, lastName, link } = this.props
//     const { age, count } = this.state
//     return (
//       <div className="w-50 mx-auto">
//         <div className="border p-3 mt-5">
//           <h4>MMening ismim {firstName}, sharifim {lastName}, yoshim {age}</h4>
//           <a href={link}>Telegram kanalim</a>
//         </div>
//         <div className="mt-3">
//           <button className="btn btn-success" onClick={this.onIncrement}>Increment</button>
//           <button className="btn btn-danger mx-2" onClick={this.onDecrement}>Decrement</button>
//           <button className="btn btn-info" onClick={this.onReset}>Reset</button>
//           <p>{count}</p>
//         </div>
//         <form>
//           <span>Yoshingiz</span>
//           <input type="text" className="form-control" onChange={e => this.onChangeHandler(e, 'muzaffar')} />
//         </form>
//         <p>Login User</p>
//         <button className="btn btn-info" onClick={this.onReset}>Toggle Login</button>
//       </div>
//     )
//   }
// }



const User = () => {
  const bigCountNumber = number => {
    return number
  }

  const [counter, setCount] = useState(0)
  const [active, setActive] = useState(true)
  const [cardNumber, setCardNumber] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');

  const onIncrement = () => { setCount(prevCounter => prevCounter + 1) }
  const onToggle = () => setActive(prevCounter => !prevCounter)
  const counterGenerate = useCallback(count => { return new Array(counter).fill('').map((_, idx) => `Counter number ${idx + 1}`) }, [counter])
  const cvcRef = useRef(null);
  const dataCvc = useRef(null);
  const handleInput = (e) => {
    const val = e.target.value;
    setCardNumber(val)
    if (val.length === 16){
      cvcRef.current.focus()
      console.log(val.length);
    }
  }

  const cvcInput = e => {
    const val = e.target.value;
    setCvcNumber(val);
    if (val.length === 3){
      dataCvc.current.focus();
    }
  }



  useEffect(() => {
    console.log(cvcRef.current);
  });
    const colors = {
    fontSize: '19px',
    color: active ? 'green' : 'red'
  }

  const number = useMemo(() => bigCountNumber(counter), [counter])

  return (
    <div className="w-50 mx-auto">
      <div className="border  p-3 mt-2 text-center">
        <p style={colors}> User activated {number}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>Increase</button>
          <button className="btn btn-warning" onClick={onToggle}>Toggle</button>
        </div>
          <input type="number" className="form-control mt-3 w-50 mx-auto" placeholder="Card Number" onChange={handleInput} value={cardNumber}/>
          <input ref={cvcRef} type="number" className="form-control mt-2 w-50 mx-auto" placeholder="Secure Number" onChange={cvcInput} value={cvcNumber}/>
          <input ref={dataCvc} type="number" className="form-control mt-2 w-50 mx-auto mb-3" placeholder="Year/Month" />
        <CounterItem counterGenerate={counterGenerate} />
      </div>
    </div>
  );
}


const App = () => {
  return (
    <div>
      <User firstName='Muzaffar' lastName='Orziboyev' link='t.me://rehpargotyrC' />
    </div>
  );
}

export default App;
