import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className='navBar'>
      <Nav />
      <div className='App'>
        <h1>Welcome to my Homepage</h1>
        <img
          src={require("./pictures/Stars2020-1.jpg")}
          height={400}
          alt='look at all the stars'
        />
      </div>
    </div>
  );
}

export default App;
