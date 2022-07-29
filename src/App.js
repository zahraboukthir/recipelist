
import './App.css';
import Title from './components/Title';
import Reliste from './components/Reliste';
import {recipes} from './data';



function App() {
  return (
    <div className="App">
      <Title/>
      <Reliste data={recipes} />
    </div>
  );
}

export default App;
