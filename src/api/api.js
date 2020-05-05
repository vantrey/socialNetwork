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
      .then(response => response.data)
  },
  followUser(useId) {
    return instance.post(`follow/${useId}`, {})
      .then(response => response.data)
  },
  unfollowUser(useId) {
    return instance.delete(`follow/${useId}`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, {status})
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}
