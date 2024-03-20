
import axios from '../utils/axios'

export function getUserInfo() {
  return axios.get('/user/info');
}

export function getUserFinance() {
  return axios.get('/user/finance');
}

export function tryLoan(params) {
  return axios.post('/user/try_loan', params);
}


export function setUserFinance(params) {
  return axios.post('/user/finance',params);
}

export function EditUserInfo(params) {
  return axios.put('/user/info', params);
}

export function login(params) {
  return axios.post('/user/login', params);
}

export function logout() {
  return axios.post('/user/logout')
}

export function register(params) {
  return axios.post('/user/register', params);
}

