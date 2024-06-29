import Navbar from "./components/Navbar/navbar"
import Intro from "./components/Intro/intro"
import About from './components/About/about'
import Skills from "./components/Skills/skills"
import MyPortfolio from "./components/Projects/projects"
import Footer from "./components/Footer/footer"
function App() {
  return ( <div className="App"> 
   
   
   <Navbar/>
   <Intro/>
   <hr/>
   <About/>
   <hr/>
   <Skills/>
   <hr/>
   <MyPortfolio/>
   <Footer/>
    </div>
  );
}

export default App;
