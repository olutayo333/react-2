import React, {Component} from "react"
import PageOne from "./page/index";
import CpapMachine from "./page/cpapMachine-page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Header from "./component/header";
class App extends Component 
{
  render()
  {
    return(
    <div>
      {/* <PageOne/> */}
      <BrowserRouter>
         <Navbar/>
          <Header/>
 
        <Routes>
          {/* <Route path='/' element={<PageOne/>}/> */}
          <Route path="/" element={<PageOne/>} />
          <Route path="/cpap_Machine" element={<CpapMachine/>}/>  
          <Route path='/*' element={<PageOne/>}/>
        </Routes>
        
      </BrowserRouter>

      </div>
    )
  }
}

export default App













// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
