import './App.css';
import ColorDisplay from './components/ColorDisplay';
import ColorSimple from './components/ColorSimple';
import CounterAdvancedControls from './components/CounterAdvancedControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

function App() {
  return (
    <div className="App">
      <ColorDisplay />
      <ColorSimple />
      <CounterDisplay />
      <CounterSimpleControls />
      <CounterAdvancedControls />
    </div>
  );
}

export default App;
