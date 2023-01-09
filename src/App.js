import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import NavBar from "./components/navigation/NavBar";
import Register from "./components/register/Register";
import Schedules from "./components/schedule/Schedules";
import Speakers from "./components/speakers/Speakers";
import Tickets from "./components/tickets/Tickets";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Speakers />
      <Schedules />
      <Register />
      <Tickets />
      <Contact />
    </>
  );
}

export default App;
