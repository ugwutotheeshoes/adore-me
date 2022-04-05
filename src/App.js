import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adore Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Cat" breed="Tomcat" />
      <Pet name="Pepper" animal="Bird" breed="Parrot" />
      <Pet name="Bill" animal="Dog" breed="German Sherperd" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
