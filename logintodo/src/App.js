// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import {Routes , Route} from 'react-router-dom'
import CounterApp from './pages/CounterApp.jsx'
import Todo from './pages/Todo.jsx'
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/" element={<CounterApp />}/>
      <Route path="/todo" element={<Todo />}/>
     </Routes>
    </div>
  );
}

export default App;
