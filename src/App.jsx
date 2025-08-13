
import './App.css'
import Header from './Component/Header/Header'
import { BrowserRouter } from "react-router-dom";
import Hero from './Component/Hero/Hero';
import ProjectManagement from './Component/ProjectManagement/ProjectManagement';
import Work from './Component/Work/Work';
import Extension from './Component/Extension/Extension';
import Customize from './Component/Customize/Customize';
import Pricing from './Component/Pricing/Pricing';
import YourWork from './Component/YourWork/YourWork';
import YourData from './Component/YourData/YourData';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <main>
        <ProjectManagement />
        <Work />
        <Extension />
        <Customize />
        <Pricing />
        <YourWork />
        <YourData />
      </main>
    </BrowserRouter>
  )
}

export default App
