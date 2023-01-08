import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navigation/NavBar";
import Schedules from "./components/schedule/Schedules";
import Speakers from "./components/speakers/Speakers";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Speakers />
      <Schedules />
    </>
  );
}

export default App;
