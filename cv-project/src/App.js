import Header from "./components/header"
import Footer from "./components/footer"
import App_body from "./components/app_body"

function App() {
  return (
    <div className="container-flex">
      <div className="row">
        <Header />
      </div>
      <hr />
      <div className="row">
        <App_body />
      </div>
      <hr />
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
