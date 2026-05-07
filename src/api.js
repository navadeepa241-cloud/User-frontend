import axios from 'axios'; 
  
const API = axios.create({ 
  baseURL: 'https://user-manager-with-auth.onrender.com/api/users' 
}); 
  
API.interceptors.request.use((req) => { 
  const token = localStorage.getItem('token'); 
  if (token) req.headers.authorization = token; 
  return req; 
}); 

export default API; 