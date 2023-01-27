import './App.css';
import Header from './components/header/Header';
import Virtual from './components/Virtual/Virtual';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Products from './components/Products/Products';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
