import "../styles/App.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from "../store";
import _ from "lodash";

function App() {
  const { contacts } = store.getState();
  console.log(contacts);
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts.contacts)} />
      <Main />
    </div>
  );
}

export default App;
