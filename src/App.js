import './App.css';
import './component/style.css';
import './component/responsive.css';
import Header from './component/header';
import About from './component/about';
import Experience from './component/experience';
import Projects from './component/projects';
import Contact from './component/contact';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
