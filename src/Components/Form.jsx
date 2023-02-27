import React, { Component } from 'react'
import { Button, Form, Spinner }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { createProduct, editProduct, fetchOne } from '../store/actions/products'

export default class FormComp extends Component {

  constructor() {
    super()
    this.state = {
      product: {
        product_name: '',
        product_price: '',
        product_stock: ''
      }
    }
  }

  componentDidMount() {
    const {act, product} = this.props
    if(act === 'edit') {
      const {
        product_name,
        product_price,
        product_stock,
        id
      } = product
      this.setState({
        product: {
          product_name,
          product_price,
          product_stock,
          product_id: id
        }
      })
    }
  }

  setField=(e)=>{
    const val = this.state.product
    const {value, name} = e.target
    val[name] = name === 'product_name' ? value : +value
    this.setState({product:val})
  }

  handleConfirm = () => {
    const {act} = this.props
    if(act === 'add') {
      this.handleAdd()
    } else this.handleEdit()
  }

  handleAdd = async () => {
    try {
      this.setState({isLoading: true})
      const { dispatch, navigate } = this.props
      const { product } = this.state

      await dispatch(createProduct(product))
      this.setState({isLoading: false})
      navigate('/')
    } catch (e) {
      alert(e.message ?? e)
      this.setState({isLoading: false})
    }
  }

  handleEdit = async () => {
    try {
      this.setState({isLoading: true})
      const { dispatch, product: productProps, handleClose } = this.props
      const { product } = this.state

      await dispatch(editProduct(product))
      await dispatch(fetchOne(productProps.id))
      handleClose()
      this.setState({isLoading: false})
    } catch (e) {
      alert(e.message ?? e)
      this.setState({isLoading: false})
    }

  }

  render() {

    const {act} = this.props
    const {product, isLoading} = this.state
    const {
      product_name,
      product_price,
      product_stock
    } = product
    
    return (
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" onChange={this.setField} name="product_name" value={product_name} placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" onChange={this.setField} name="product_price" value={product_price} placeholder="Enter price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Stock</Form.Label>
          <Form.Control type="number" onChange={this.setField} name="product_stock" value={product_stock} placeholder="Enter stock" />
        </Form.Group>
        <Button variant="primary" disabled={isLoading} onClick={this.handleConfirm} >
          
          {
            isLoading
            ?
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            : 'Submit'
          }
        </Button>
        {
          act === 'add'
          &&
          <Link to="/">
            <Button className='ml-14'>Back</Button>
          </Link>
        }
      </div>
    )
  }
}
