import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import routes from './constants/routes/routes';
function App() {
  return (
    <div className="App">
      <Routes>

      {routes.map(item=>(
        <Route  {...item} key={item.path}/>
      ))}
      </Routes>
 
    </div>
  );
}

export default App;
