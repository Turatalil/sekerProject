import styled from "styled-components";
import Footer from "./components/footer/Footer";
import ColorFilter from "./components/main/ColorFilter";
import ManufacturerFilter from "./components/main/ManufacturerFilter";
import PriceFilter from "./components/main/PriceFilter";

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Section>

      <PriceFilter/>
      <ColorFilter/>
      <ManufacturerFilter/>

        </Section>
      </main>
      <footer>

      <Footer/>
      </footer>
    </div>  
  );
}

export default App;


const Section =styled.section`
height: 800px;
width: 340px;
margin-top: 702px;
margin-left:135px;

`