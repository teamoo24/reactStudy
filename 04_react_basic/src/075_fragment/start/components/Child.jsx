import "./Child.css"
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        asperiores cum placeat sequi quas veniam. Hic provident culpa delectus
        rerum quisquam in quidem error ratione ipsam tenetur. Saepe, deleniti
        velit.
      </p>
    </Fragment>
  );
};

export default Child;
