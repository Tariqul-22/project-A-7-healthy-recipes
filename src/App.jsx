import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Header/Nav'
import OurRecipes from './Components/Our Recipes/OurRecipes'
import RecipesCardSection from './Components/RecipesCardSection/RecipesCardSection'

function App() {
  const notify = () => toast("Already added!!");

  return (
   <div className='container max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto'>
      <Nav></Nav>
      <ToastContainer />
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <RecipesCardSection notify={notify}></RecipesCardSection>
   </div>
  )
}

export default App
