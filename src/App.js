import React from "react";
import "./styles.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
          { headerName: "Id", field: "id", sortable: true, filter: true },
          { headerName: "Name", field: "name", sortable: true, filter: true },
          { headerName: "Description", field: "description", sortable: true, filter: true },
          { headerName: "Domain_NAME", field: "domain_name", sortable: true, filter: true }
      ],
      rowData: [
        {id:"A1",name:"apiPerimissionRead",description:"apiPerimissionRead",domain:"abc"},
        {id:"A2",name:"apiPerimissionUpdate",description:"apiPerimissionUpdate",domain:"abc"},
        {id:"A3",name:"apiPreferenceRead",description:"apiPreferenceRead",domain:"abc"},
        {id:"A4",name:"apiPreferenceUpdate",description:"apiPreferenceUpdate",domain:"def"},
        {id:"A5",name:"apiNameDefRead",description:"apiNameDefRead",domain:"def"},
        {id:"A6",name:"apiNameDefUpdate",description:"apiNameDefUpdate",domain:"def"},
        {id:"A7",name:"validateApiCallRead",description:"validateApiCallRead",domain:"ghi"},
        {id:"A8",name:"validateApiCallUpdate",description:"validateApiCallUpdate",domain:"ghi"},
        {id:"A9",name:"apiAcccountInfoRead",description:"apiAcccountInfoRead",domain:"jkl"},
        {id:"A10",name:"apiAccountUpdate",description:"apiAccountUpdate",domain:"jkl"}
      ]
    };
  }

  render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{ height: "200px", width: "600px" }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default App;
