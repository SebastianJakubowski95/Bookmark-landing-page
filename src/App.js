import NavigationLarge from "./components/UI/NavigationLarge";
import NavigationMobile from "./components/UI/NavigationMobile";
import Section_1 from "./components/UI/Section_1";
import Section_2 from "./components/UI/Section_2";
import Section_3 from "./components/UI/Section_3";
import Section_4 from "./components/UI/Section_4";
import Section_5 from "./components/UI/Section_5";
import Footer from "./components/UI/Footer";

function App() {
  let w = window.innerWidth;
  return (
    <>
      {w >= 768 ? <NavigationLarge /> : <NavigationMobile />}
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Footer />
    </>
  );
}

export default App;
