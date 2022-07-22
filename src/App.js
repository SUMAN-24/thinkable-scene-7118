import "./App.css";
import Banner1 from "./components/Banner/Banner1";
import Banner2 from "./components/Banner/Banner2";
import Navbar from "./components/Navbar/Navbar";
import Headings from "./components/ShopByCategory/Heading";
import ViewPort from "./components/Viewport/ViewPort";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner1 />
      <Banner2 />
      <ViewPort />
      <Headings />
    </div>
  );
}

export default App;
