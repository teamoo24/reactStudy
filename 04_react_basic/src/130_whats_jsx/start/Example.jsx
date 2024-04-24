import React from "react";

const Example = () => {
  const sample1 = <h1 className="greeting">Hello World</h1>;

  console.log(sample1);

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  console.log(
    React.createElement(
      "h1",
      {
        className: "greeting",
      },
      "Hello World"
    )
  );

  // console.log(
  //   (
  //     <div>
  //       <h1>Hello!</h1>
  //       <h2>Good to see you</h2>
  //     </div>
  //   ).props
  // );

  React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );
};

export default Example;
