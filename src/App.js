import logo from './logo.svg';
import './App.css';

const name="Anup kumar";
const add="Bhopal";
const img1="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
const img2="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270";
const img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykl1aEmIHBLvn9V1qd7cTONMpp8CE7KLHAtHaes6EVkPz9r8jeRcJJUrHfznpW02rk_E&usqp=CAU";

const heading={color:"black", textTransform:"uppercase"};
const curtime= new Date().toLocaleTimeString();

function App() {
  return (
    <div className="App">
    
        <h1 className="heading" style={heading}>Hello {name}</h1>
        <div className="image">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />

        </div>
       
    if({curtime}){

    }
    </div>
  );
}

export default App;
