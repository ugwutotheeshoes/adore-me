import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
  return (
    <div>
      <h1>Adore Me!</h1>
      <Pet name="Luna" animal="Cat" breed="Tomcat" />
      <Pet name="Pepper" animal="Bird" breed="Parrot" />
      <Pet name="Bill" animal="Dog" breed="German Sherperd" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
