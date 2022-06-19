import { Header } from './components/header'
import { NavBar } from './components/navbar';
import { Profile } from './components/profile';
import './App.css';

function App() {
  return (
    <div className = "wrapper">
      <Header />
      <NavBar/>
      <Profile />
    </div>
  );
}

export default App;
