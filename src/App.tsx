import { Header } from "./components/@header/Header";
import { Footer } from "./components/@footer/Footer";
import { MainRoutes } from "./Routes";

const App = () => {
  return (
    <div className="App relative">
      <div className="content">
        <Header />
        <div className="flex">
          <MainRoutes />
        </div>
      </div>
      <section className="footer absolute bottom-0 left-0 w-full">
        <Footer />
      </section>
    </div>
  );
};

export default App;
