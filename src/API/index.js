import axios from 'axios';

const teacherCreateurl = 'http://localhost:5000/teacherPosts';

// teacher api
export const fetchPosts = () => axios.get(teacherCreateurl);
export const createUser = (newUser) => axios.post(teacherCreateurl, newUser);

// admin api

