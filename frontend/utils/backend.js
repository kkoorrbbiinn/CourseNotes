import axios from "axios";

export async function getComments(playerId) {
    const { data } = await axios.get(`http://localhost:3000/api/comments/${playerId}`)
    return data
}

export async function postComments(comment) {
    const { data } = await axios.post('http://localhost:3000/api/comments', comment)
    return data
}

export async function putComments(comment) {
    const { data } = await axios.put(`http://localhost:3000/api/comments`, comment)
    return data
}

export async function deleteComments(commentId) {
    const { data } = await axios.delete(`http://localhost:3000/api/comments/${commentId}`)
    return data
}