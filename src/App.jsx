import './App.css';
import TopBar from './components/TopBar';
import Background from './components/background';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
