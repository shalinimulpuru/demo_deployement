
import Navbar from "./components/Navbar"
import Topnavbar from "./components/Topnavbar"
import Banner from "./components/banner"
import Categories from "./components/categories"
import Newarrivals from "./components/newarrivals"
import Bottom from "./components/bottom"
import Listcompo from "./components/listcomoonents"

function App() {
 
  return <div>
    <Topnavbar/>
    <Navbar></Navbar>
    <Listcompo></Listcompo>
    <Banner></Banner>
    <Categories></Categories>
    <Newarrivals/>
    <Bottom/>
    

  </div>
}

export default App;
