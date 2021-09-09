import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
