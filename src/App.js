import { useState } from "react";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       age: ''
//     }
//   };

//   onChangeHandler = e => {
//     this.setState({
//       age: e.target.value
//     });
//   }

//   
// }

const User = ({firstName, lastName, link}) => {

  const [counter, setCount] = useState(0)

  const onIncrement = () =>{
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
  }
  const onDecrement = () =>{
    setCount(prevCounter => prevCounter - 1)
  }


  return (
    <div className="w-50 mx-auto">
      <div className="border  p-3 mt-2">
        <h4>Salom mening ismim - {firstName}, sharifim - {lastName}</h4>
        <a href='{link}'>Telegram profilim</a>
        <div>
          <p className="text-center">Count =  {counter}</p>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>+</button>
          <button className="btn btn-danger" onClick={onDecrement}>-</button>
        </div>
      </div>
    </div>  
  );
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
