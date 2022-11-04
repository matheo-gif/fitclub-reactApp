import './App.css';
import Futer from './components/Footer/futer';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testmonials/Testimonials';

function App() {
    return ( 
    <div className = "App" >
      <Hero/>
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Futer/>
      
    </div>
    );
}

export default App;