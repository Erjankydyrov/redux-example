import './App.css';
import CounterAdvancedControls from './components/CounterAdvancedControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <CounterSimpleControls />
      <CounterAdvancedControls />
    </div>
  );
}

export default App;
