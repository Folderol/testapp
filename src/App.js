import React from "react";
import "./styles.css";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Domain", field: "domain" },
        { headerName: "Scope", field: "scope" },
        { headerName: "App", field: "app" }],
      rowData: [
        { domain: "ifm", scope: "ifm:read", app: "app1"},
        { domain: "OVM", scope: "ovm:create_order", app: "app2"},
        { domain: "ACE", scope: "ACE:read", app: "app3"}]
    }
  }

  render() {
    return (
      <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
