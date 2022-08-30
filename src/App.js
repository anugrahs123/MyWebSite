import './App.css';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import SkillConatiner from './Components/SkillConatainer/SkillConatiner';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './Components/ExperienceContainer/ExperienceContainer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
   <Header/>
   <TopContainer/>
   <SkillConatiner/>
   <ProjectContainer/>
   <ExperienceContainer/>
   <Contact/>
    </div>
  );
}

export default App;
