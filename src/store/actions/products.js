import { axiosDelete, axiosGet, axiosPost, axiosPut } from '.'

export const fetchData = () => {
  return async (dispatch) => {
    try{
      const products = await axiosGet('')

      dispatch({
        type: 'SET_PRODUCTS',
        products
      })
    }
    catch(e) {throw e}
  }
}

export const fetchOne = (id) => {
  return async (dispatch) => {
    try{
      const product = await axiosGet(`product?product_id=${id}`)
      
      dispatch({
        type: 'SET_PRODUCT',
        product: product[0]
      })
    }
    catch(e) {throw e}
  }
}

export const createProduct = (product) => {
  return async () => {
    try{
      const data = await axiosPost('', product)
      if(data.type === 'error') throw data
      
      return 'success'
    }
    catch(e) {throw e}
  }
}

export const editProduct = (product) => {
  return async () => {
    try{
      const data = await axiosPut('', product)
      if(data.type === 'error') throw data
      
      return 'success'
    }
    catch(e) {throw e}
  }
}

export const deleteProduct = (id) => {
  return async () => {
    try{
      const data = await axiosDelete(id)
      if(data.type === 'error') throw data
      
      return 'success'
    }
    catch(e) {throw e}
  }
}