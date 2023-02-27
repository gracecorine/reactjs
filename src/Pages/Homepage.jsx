import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { deleteProduct, fetchData } from '../store/actions/products'
import { compose } from 'redux'
import { withRouter } from '../Components/Common/withRouter'
import { getCurrency } from '../helper'
import swal from 'sweetalert'

class Homepage extends Component {

  componentDidMount() {
    this.getData()
  }
  
  getData = () => {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }

  handleGoToDetail = (id) => {
    this.props.navigate(`/${id}`)
  }

  confirmDelete = async (id) => {
    try {
      this.setState({isLoading: true})
      const {dispatch} = this.props
      await dispatch(deleteProduct(id))
      await dispatch(fetchData())
      this.setState({isLoading: false})
    } catch (e) {
      
    }
  }

  handleDelete = (product) => {
    swal({
      title: "",
      text: `Delete ${product.product_name}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.confirmDelete(product.id)
        } else {
          swal("Canceled!");
        }
      });
  }

  render() {
    const {products} = this.props

    return (
      <div style={{padding: '40px'}}>
        <h1>X's Store</h1>
        <div style={{textAlign: 'right'}}>
          <Link to="/add-product">
            <Button>
              Add Product
            </Button>
          </Link>
          
        </div>
        <hr />
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td onClick={() => this.handleGoToDetail(el.id)} className='pointer'>{el.product_name}</td>
                    <td>{getCurrency(el.product_price)}</td>
                    <td>{el.product_stock}</td>
                    <td>
                      <Button variant="danger" onClick={() => this.handleDelete(el)}>Delete</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const products = state.products;

  return products
  
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Homepage);
