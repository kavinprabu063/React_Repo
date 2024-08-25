import Header from "./components/Header";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import {Route,Routes} from "react-router-dom";


const App =()=>{

  return(
    <div>
     <Header name="Sri Krishna College of Engineering and Technology"/>
     <Routes>
     
      <Route path="/counter" element={<Counter/>} />
      <Route path="/post" element={<Posts/>} />
     </Routes>
    
    </div>
    
  )
}
export default App;
