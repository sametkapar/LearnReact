import logo from './logo.svg';
import './App.css';



function App() {
  const degisken = "Const degisken atılarak gelen yazı";
  return (
    <div className="App">
        <h2>Selam</h2>
        <div style={{backgroundColor:'red'}}>A</div>
        <label>{10+10}</label><br/>
        <label>{"Samet Kapar".toUpperCase()}</label><br/>
        <label><b>Label içi</b> = {degisken}</label>
    </div>
  );
}
export default App;
