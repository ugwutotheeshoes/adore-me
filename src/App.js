import React from "react";
import ReactDOM from "react-dom";
import Pet from './Pet'

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Cat", breed: "Tomcat" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Parrot",
    }),
    React.createElement(Pet, {
      name: "Bill",
      animal: "Dog",
      breed: "German Sheperd",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
