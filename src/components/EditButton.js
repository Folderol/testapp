import React from 'react';

export default class EditButton extends React.Component {
  constructor(props) {
    super(props);

    this.invokeParentMethod = this.invokeParentMethod.bind(this);
  }

  invokeParentMethod() {
    this.props.context.componentParent.methodFromParent(
      `Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`
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