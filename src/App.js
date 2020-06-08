import React from "react";
import "./styles.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class App extends React.Component {
  constructor(props) {
    super(props);

      let hdrID = { headerName: "Id", field: "id", sortable: true, filter: true };
      let hdrName = { headerName: "Name", field: "name", sortable: true, filter: true };
      let hdrDesc = { headerName: "Description", field: "description", sortable: true, filter: true };
      let hdrEnv = { headerName: "Env", field: "env", sortable: true, filter: true };

      let hdrClientID = { headerName: "Client Id", field: "clientId", sortable: true, filter: true };
      let hdrScopeID = { headerName: "Scope Id", field: "scopeId", sortable: true, filter: true };

      let hdrEffectiveDate = { headerName: "Effective Date", field: "effectiveDate", sortable: true, filter: true };
      let hdrExperiationDate = { headerName: "Experiation Date", field: "experiationDate", sortable: true, filter: true };

      let hdrAccess = { headerName: "Access", field: "access", sortable: true, filter: true };
      
      let scopeData = {
        columnDefs: [
          hdrID,
          hdrName,
          hdrDesc,
          hdrAccess,
          hdrEffectiveDate,
          hdrExperiationDate
        ],
        rowData: [
          {id:"S1", appId:"A1", name:"apiPerimissionRead",access:"read", description:"apiPerimissionRead",domain:"abc", effectiveDate: "06/03/2020 14:00:00", experiationDate:"06/029/2020 14:00:00"}
        ]
      }

      let clientScopeData = {
        columnDefs: [
          hdrClientID,
          hdrScopeID
        ],
        rowData: [
          {clientId:"C3",scopeId:"S3"},
          {clientId:"C3",scopeId:"S4"},
          {clientId:"C1",scopeId:"S3"},
          {clientId:"C1",scopeId:"S4"},
          {clientId:"C2",scopeId:"S3"},
          {clientId:"C2",scopeId:"S4"},
          {clientId:"C1",scopeId:"S12"},
          {clientId:"C1",scopeId:"S10"}
        ]
      }

      let domainData = {
        columnDefs: [
            hdrID,
            hdrDesc,
        ],
        rowData: [
          {id:"abc",description:"Customer"},
          {id:"def",description:"Enterprise"},
          {id:"ghi",description:"Managment"},
          {id:"jkl",description:"Relations"}
        ]
      };

      let clientData = {
        columnDefs: [
            hdrID,
            hdrName,
            hdrDesc,
            hdrEnv
        ],
        rowData: [
          {id:"C1",name:"1",description:"client1",env:"Test"},
          {id:"C2",name:"1",description:"client1",env:"Prod"},
          {id:"C3",name:"1",description:"client1",env:"Dev"},
          {id:"C4",name:"2",description:"client2",env:"Test"},
          {id:"C5",name:"2",description:"Client2",env:"Prod"},
          {id:"C6",name:"2",description:"Client2",env:"Dev"},
        ]
      };

      let apiData = {
        columnDefs: [
            hdrID,
            hdrName,
            hdrDesc,
            { headerName: "Domain Name", field: "domain", sortable: true, filter: true }
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

    this.state = {
      columnDefs: scopeData.columnDefs,
      rowData: scopeData.rowData
    };
  }

  render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{ height: "600px", width: "900px" }}
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
