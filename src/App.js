import Header from "./components/Header";
import './App.css';
import Product from "./components/Product";
import { clearAllItems } from "./Service/Slice";
import { useDispatch } from "react-redux";

function App() {

  const dispatch= useDispatch()
  return (
    <div className="App">
     <Header/>
     <button onClick={()=>dispatch(clearAllItems())} className="btn-clear">Clear Cart</button>
     <Product/>
    </div>
  );
}

export default App;
