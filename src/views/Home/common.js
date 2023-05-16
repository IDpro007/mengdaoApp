import axios from 'axios';

export const queryDownLoadLink = () => {
  const url = window.location.hostname
  const port = window.location.port
  const protocol = window.location.protocol
  return axios.get(`${protocol}//${url}:${port}/api/v1/app/download`).then(res =>{ return res})
}