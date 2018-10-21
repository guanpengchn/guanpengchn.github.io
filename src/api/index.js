import axios from 'axios'
import { clientId,clientSecret,owner } from '@/config'

axios.defaults.baseURL = 'https://api.github.com'

axios.interceptors.request.use(config => {
  config.url += `${config.url.includes('?') ? '&' : '?'}client_id=${clientId}&client_secret=${clientSecret}`
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export const getRepoIssues = (name, page = 1, size = 5, labels = null) => {
  const params = labels == null? { page, per_page: size, filter: 'created' } : { page, per_page: size, filter: 'created',labels } 
  return axios.get(`/repos/${owner}/${name}/issues`, { params })
}

export const getRepoIssue = (repo, number) => {
  return axios.get(`/repos/${owner}/${repo}/issues/${number}`)
}

export const getRepoIssuesComments = (repo, number, page = 1, size = 30) => {
  const params = { page, per_page: size }
  return axios.get(`/repos/${owner}/${repo}/issues/${number}/comments`, { params })
}

export const getRepoContent = (repo, filename='') => {
  return axios.get(`/repos/${owner}/${repo}/contents/${filename}`)
}

export const getRepositories = () => {
  return axios.get(`/users/${owner}/repos`)
}