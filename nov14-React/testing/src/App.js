import './App.css';
import ApiButtonPromise from './components/ApiButtonPromise';
import ApiButtonAsync from './components/ApiButtonAsync';
import ApiButtonTimeout from './components/ApiButtonTimeout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>API Button Demo</h1>

        <div style={{ margin: '10px 0' }}>
          <ApiButtonPromise />
        </div>

        <div style={{ margin: '10px 0' }}>
          <ApiButtonAsync />
        </div>

        <div style={{ margin: '10px 0' }}>
          <ApiButtonTimeout />
        </div>
      </header>
    </div>
  );
}

export default App;
