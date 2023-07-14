import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        {/* wrapping elements to context -> data provider */}
        <Home/> 
      </DataProvider>
    </div>
  );
}

export default App;
