import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { connect } from "react-redux"
import { compose } from 'redux'
import { withRouter } from '../Components/Common/withRouter'
import { fetchOne } from '../store/actions/products'
import ModalEdit from '../Components/ModalEdit'
import { Link } from 'react-router-dom'
import { getCurrency } from '../helper'

class ProductDetail extends Component {

  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }
  componentDidMount() {
    this.getData()
  }
  
  getData = () => {
    const { productId } = this.props.params;
    const { dispatch } = this.props;
    dispatch(fetchOne(productId));
  }

  openModal = () => this.setState({showModal: true})

  closeModal = () => this.setState({showModal: false})

  render() {
    const {product, dispatch} = this.props
    const {showModal} = this.state
    return (
      <div style={{padding: '40px'}}>
        {
          !product
          ?
          <Spinner />
          :
          <>
          <div className='flex flex-between'>
            <h1>{product?.product_name}</h1>
            <div className='flex align-items-center'>
              <Button variant="warning" onClick={this.openModal}>Edit</Button>
              <Link to="/">
                <Button className='ml-14'>Back</Button>
              </Link>
            </div>
          </div>
          <hr />
          <h3>Product Price: {getCurrency(product?.product_price)}</h3>
          <h3>Product Stock: {product?.product_stock}</h3>


          <ModalEdit handleClose={this.closeModal} dispatch={dispatch} product={product} show={showModal} />
          </>
        }
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  const product = state.products;

  return product
  
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ProductDetail);