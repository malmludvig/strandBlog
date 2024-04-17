import "./App.css";
import { Navbar, Contact, Header, Services, Review } from "./containers/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Services />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
