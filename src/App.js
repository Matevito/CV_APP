import Header from "./components/header"
import Footer from "./components/footer"
import AppBody from "./components/app_body"
import "./App.css"

function App() {
  return (
    <div className="container-flex">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <AppBody />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
