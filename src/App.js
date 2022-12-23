import logo from './logo.svg';
import './App.css';
import CounterView from './Features/Counter/CounterView';
import PostView from './Features/Posts/PostView';

function App() {
  return (
    <div className="App">
      <h1 className='bg-secondary text-white'>Welcome to Redux Toolkit</h1>
      <CounterView/>
      <hr />
      <PostView/>
    </div>
  );
}

export default App;
