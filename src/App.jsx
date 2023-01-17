
import MainProduct from "./components/product/MainProduct";
import MainHeader from "./components/header/MainHeader";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/product/ItemListContainer";
import Contact from "./components/contact/contact";
import Us from "./components/us/Us";
import Pasteles from "./components/pasteles/Pasteles";
import Dulces from "./components/dulces/Dulces";
const App = () => {
    return(
        <>
            <MainHeader/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/MainProduct" element={<MainProduct/>}/>
                    <Route path="/Pasteles" element={<Pasteles/>}/>
                    <Route path="/Dulces" element={<Dulces/>}/>
                    <Route path="/Us" element={<Us/>}/>
                    <Route path="/Contacto" element={<Contact/>}/>
                </Routes>
          
            
            </BrowserRouter>
            
            
        </>

        );
};

export default App;