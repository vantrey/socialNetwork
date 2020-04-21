import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'bf825c9a-985b-4152-9f7d-ce82a9632e5e'
  }
})

export const usersAPI = {
  getUsers(pageSize, pageNumber) {
    return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
      .then((response) => response.data)
  }
}