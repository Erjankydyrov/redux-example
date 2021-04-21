import './App.css';
import ColorDisplay from './components/ColorDisplay';
import ColorSimple from './components/ColorSimple';
import CounterAdvancedControls from './components/CounterAdvancedControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';
import SliderControls from './components/SliderControls';

function App() {
  return (
    <div className="App">
      <ColorDisplay />
      <ColorSimple />
      <SliderControls />
      <CounterDisplay />
      <CounterSimpleControls />
      <CounterAdvancedControls />
    </div>
  );
}

export default App;
