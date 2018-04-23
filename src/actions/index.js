import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const POST_NEWPOST = 'POST_NEWPOST';
export const OPEN_POSTID = 'OPEN_POSTID';
export const DELETE_POSTID = 'DELETE_POSTID';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=LK';


export function getPostList() {
const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function postNewPost(post, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, post )
    .then(()=> callback());
    return {
        type: POST_NEWPOST,
        payload: request
    }
}

export function openPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: OPEN_POSTID,
        payload: request
    }
}
export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=>callback());
    return {
        type: DELETE_POSTID,
        payload: request
    }
}