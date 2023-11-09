import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hello from './components/Hello'
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Hello nama={"Pardi"}/>
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
