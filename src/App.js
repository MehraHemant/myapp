import './App.css';
import Home from './Components/Home';

function App() {
  const fruits = ['Apple', 'Mango', 'Guvava', 'watermelon'];
  const color = ['red', 'yellow', 'green', 'blue'];
 
  return (
    <Home fruits={fruits} color={color}></Home>
  );
}

export default App;
