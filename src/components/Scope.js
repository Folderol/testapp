import React from "react";

class Scope extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      somedata: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Scope</h1>
      </div>
    );
  }
}

export default Scope;
