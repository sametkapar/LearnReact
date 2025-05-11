import './App.css';
import Navbar,{CategoryBar} from './components/navbar'
import Jumbotron from './components/jumbotron'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CategoryBar/>
      <Jumbotron/>
    </div>
  );
}

export default App;
