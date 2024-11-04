import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClickSynthetic = (e) => {
    alert("Click happened, It is React Synthetic Event...");

    console.log(e);
    console.log(e.target, "-----Target");
    console.log(e.type, "---Event_Type");
    console.log(e.bubbles, "----Event_Bubbles");
    console.log(e.nativeEvent, "----Native_Event_Version");
  };

  return (
    <div className="App">
      <header className="header">
        <img alt="react-logo" width={100} src={logo} />
        <p>Synthetic Events</p>
      </header>
      <main>
        <button className="btn" onClick={handleClickSynthetic}>
          Synthetic Event
        </button>
      </main>
    </div>
  );
}

export default App;
