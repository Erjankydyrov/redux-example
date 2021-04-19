import './App.css';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <CounterSimpleControls />
    </div>
  );
}

export default App;
