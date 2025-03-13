import axios from 'axios'

const axiosCustomize = axios.create({
  baseURL: 'http://localhost:8888/',
})

axiosCustomize.interceptors.request.use(function (config) {

  return config;
}, function (error) {

  return Promise.reject(error);
});

axiosCustomize.interceptors.response.use(function (response) {

  return response && response.data ? response.data : response;
}, function (error) {

  return Promise.reject(error);
});


export default axiosCustomize