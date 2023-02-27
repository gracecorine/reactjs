import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../Components/Common/withRouter';
import Form from '../Components/Form'

class AddProduct extends Component {
  render() {
    const {dispatch, navigate} = this.props
    return (
      <div style={{padding: '40px'}}>
        <h1 className='center'>Add Product</h1>
        <Form act="add" navigate={navigate} dispatch={dispatch} />
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect()
)(AddProduct);
