import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-type': 'application/json'
  }
})

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  Vue.$toast.error(error.message)
  return Promise.reject(error)
})

export default instance
