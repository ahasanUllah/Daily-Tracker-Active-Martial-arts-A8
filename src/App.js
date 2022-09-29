import './App.css';
import Nav from './components/Nav/Nav';
import Qna from './components/Qna/Qna';
import Home from './Home/Home';

function App() {
   return (
      <div>
         <Nav></Nav>
         <Home />
         <Qna />
      </div>
   );
}

export default App;
