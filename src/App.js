
import './App.css';
import Footer from './components/Common/Footer/index.footer';
import Header from './components/Common/Header/index.header';
import MainComponent from './components/LandingPage/MainComponent/mainComponent.index';

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
