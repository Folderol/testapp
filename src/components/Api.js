import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      somedata: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Api</h1>     
        <div className="ag-theme-alpine" style={{ height: "600px", width: "900px" }} >
        <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} />
        </div>
      </div>
    );
  }
}

export default Api;
