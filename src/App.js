import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigator from "./components/Navigator";
import "./styles.css";
import Gentab from "./components/Gentab";
import Scope from "./components/Scope";
import EditButton from './components/EditButton'
import DeleteButton from './components/DeleteButton'

class App extends React.Component {
  constructor(props) {
    super(props);

    let hdrID = {
      headerName: "Id",
      field: "id",
      sortable: true,
      checkBoxSelection: true,
      filter: true
    };
    let hdrName = {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true
    };
    let hdrDesc = {
      headerName: "Description",
      field: "description",
      sortable: true,
      filter: true
    };
    let hdrEnv = {
      headerName: "Env",
      field: "env",
      sortable: true,
      filter: true
    };

    let hdrClientID = {
      headerName: "Client Id",
      field: "clientId",
      sortable: true,
      filter: true
    };
    let hdrScopeID = {
      headerName: "Scope Id",
      field: "scopeId",
      sortable: true,
      filter: true
    };

    let hdrEffectiveDate = {
      headerName: "Effective Date",
      field: "effectiveDate",
      sortable: true,
      filter: true
    };
    let hdrExpiryDate = {
      headerName: "ExpiryDate",
      field: "expiryDate",
      sortable: true,
      filter: true
    };
    let hdrCheck = {
      headerName: "Check",
      field: "check",
      checkBoxSelection: true
    };

    let hdrEdit = {
      headerName: 'Edit',
      field: 'value',
      cellRendererFramework: EditButton,
      colId: 'params',
      width: 180,    header: "Edit",
      filterable: false,

    }

    let hdrDelete = {
      headerName: 'Delete',
      field: 'value',
      cellRendererFramework: DeleteButton,
      colId: 'params',
      width: 180,    header: "Delete",
      filterable: false,

    }

    let hdrAccess = {
      headerName: "Access",
      field: "access",
      sortable: true,
      filter: true
    };

    let scopeData = {
      columnDefs: [
        hdrID,
        hdrName,
        hdrDesc,
        hdrAccess,
        hdrEffectiveDate,
        hdrExpiryDate,
	      hdrEdit,
	      hdrDelete
      ],
      rowData: [
        {
          id: "S1",
          appId: "A1",
          name: "apiPerimissionRead",
          access: "read",
          description: "apiPerimissionRead",
          domain: "abc",
          effectiveDate: "06/03/2020 14:00:00",
          expeiryDate: "06/029/2020 14:00:00"
        }
      ]
    };

    let clientScopeData = {
      columnDefs: [hdrClientID, hdrScopeID, hdrEdit, hdrDelete],
      rowData: [
        { clientId: "C3", scopeId: "S3" },
        { clientId: "C3", scopeId: "S4" },
        { clientId: "C1", scopeId: "S3" },
        { clientId: "C1", scopeId: "S4" },
        { clientId: "C2", scopeId: "S3" },
        { clientId: "C2", scopeId: "S4" },
        { clientId: "C1", scopeId: "S12" },
        { clientId: "C1", scopeId: "S10" }
      ]
    };

    let domainData = {
      title: "Domain",
      columnDefs: [hdrID, hdrDesc, hdrEdit, hdrDelete],
      rowData: [
        { id: "abc", description: "Customer" },
        { id: "def", description: "Enterprise"},
        { id: "ghi", description: "Managment"},
        { id: "jkl", description: "Relations"}
      ]
    };

    let clientData = {
      columnDefs: [hdrID, hdrName, hdrDesc, hdrEnv, hdrEdit, hdrDelete],
      rowData: [
        { id: "C1", name: "Client1", description: "client1", env: "Test" },
        { id: "C2", name: "Client1", description: "client1", env: "Prod" },
        { id: "C3", name: "Client1", description: "client1", env: "Dev" },
        { id: "C4", name: "Client2", description: "client2", env: "Test" },
        { id: "C5", name: "Client2", description: "Client2", env: "Prod" },
        { id: "C6", name: "Client2", description: "Client2", env: "Dev" }
      ]
    };

    let apiData = {
      columnDefs: [
        hdrID,
        hdrName,
        hdrDesc,
	      {
          headerName: "Domain Name",
          field: "domain",
          sortable: true,
          filter: true
        },
        hdrEdit,
        hdrDelete
      ],
      rowData: [
        { id: "A1", name: "apiPerimissionRead", description: "apiPerimissionRead", domain: "abc" },
        { id: "A2", name: "apiPerimissionUpdate", description: "apiPerimissionUpdate", domain: "abc" },
        { id: "A3", name: "apiPreferenceRead", description: "apiPreferenceRead", domain: "abc" },
        { id: "A4", name: "apiPreferenceUpdate", description: "apiPreferenceUpdate", domain: "def" },
        { id: "A5", name: "apiNameDefRead", description: "apiNameDefRead", domain: "def" },
        { id: "A6", name: "apiNameDefUpdate", description: "apiNameDefUpdate", domain: "def" },
        { id: "A7", name: "validateApiCallRead", description: "validateApiCallRead", domain: "ghi" },
        { id: "A8", name: "validateApiCallUpdate", description: "validateApiCallUpdate", domain: "ghi" },
        { id: "A9", name: "apiAcccountInfoRead", description: "apiAcccountInfoRead", domain: "jkl" },
        { id: "A10", name: "apiAccountUpdate", description: "apiAccountUpdate", domain: "jkl" }
      ]
    };

    this.state = {
      apiData: apiData,
      scopeData: scopeData,
      scopeColumnDefs:scopeData.columnDefs,
      scopeRowData:scopeData.rowData,
      clientScopeData : clientScopeData,
      domainData:domainData,
      clientData:clientData,
      context: { componentParent: this },
    };
  }

  methodFromParent = cell => {
    alert('Parent Component Method from ' + cell + '!');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigator/>
          <Switch>
            <Route path="/" component={(routeProps) => <Gentab title="Api" context={this.state.context} tableDef={this.state.apiData} {...routeProps} /> } exact />
            <Route path="/api" component={(routeProps) => <Gentab title="Api" context={this.state.context} tableDef={this.state.apiData} {...routeProps} /> } />
            <Route path="/scope" component={(routeProps) => <Scope title="Scope" context={this.state.context} tableDef={this.state.scopeData} {...routeProps} /> } />
            <Route path="/clientscope" component={(routeProps) => <Gentab title="Client Scope" context={this.state.context} tableDef={this.state.clientScopeData} rowData={this.state.scopeRowData} {...routeProps} /> } />
            <Route path="/domain" component={(routeProps) => <Gentab title="Domain" context={this.state.context} tableDef={this.state.domainData} {...routeProps} /> } />
            <Route path="/client" component={(routeProps) => <Gentab title="Client" context={this.state.context} tableDef={this.state.clientData} {...routeProps} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
