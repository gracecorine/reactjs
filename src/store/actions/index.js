import axios from 'axios'
// const url = process.env.REACT_APP_API
// const url ='https://mocki.io/v1/8b456be6-0ae5-4048-9364-d3cb6bf4707b'
const url = 'https://d730-182-1-112-163.ap.ngrok.io'
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const axiosGet = async (path) => {
  try {
    const { data } = await axios.get(path !== '' ? `${url}/${path}` : `${url}`);
    return data.data;
    
  } catch(e) {
    throw e;
  }
}

export const axiosPost = async(path, body) => {
  try {
    const { data } = await axios.post(path !== '' ? `${url}/${path}` : `${url}`, body, config);
    return data;
  } catch(e) {
    throw e;
  }
};

export const axiosPut = async(path, body) => {
  try {
    const { data } = await axios.put(`${url}/${path}`, body, config);
    return data;
  } catch(e) {
    throw e;
  }
};

export const axiosDelete = async(path, body) => {
  try {
    const { data } = await axios.delete(`${url}/${path}`, { data: body });
    return data;
  } catch(e) {
    throw e;
  }
};
