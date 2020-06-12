import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class Gentab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: props.tableDef.rowData,
      columnDefs: props.tableDef.columnDefs,
      defaultColDef: props.tableDef.defaultColDef,
      title: props.title,
      context: props.context
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <br />
        <div
          className="ag-theme-alpine"
          style={{ height: "600px", width: "900px" }}
        >
          <AgGridReact
            rowSelection="single"
            defaultColDef={this.state.defaultColDef}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            context={this.state.context}
          />
        </div>
      </div>
    );
  }
}

export default Gentab;
