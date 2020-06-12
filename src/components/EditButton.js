import React from 'react';

export default class EditButton extends React.Component {
  constructor(props) {
    super(props);

    this.AgGridReact.invokeParentMethod = this.AgGridReact.invokeParentMethod.bind(this);
  }

  invokeParentMethod() {
    this.AgGridReact.props.context.componentParent.methodFromParent(
      `Row: ${this.AgGridReact.props.node.rowIndex}, Col: ${this.AgGridReact.props.colDef.headerName}`
    );
  }

  render() {
    return (
      <span>
        <button
          style={{ height: 20, lineHeight: 0.5 }}
          onClick={this.invokeParentMethod}
          className="btn btn-info"
        >
         Edit 
        </button>
      </span>
    );
  }
}