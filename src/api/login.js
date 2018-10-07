import request from '@/utils/request'

export function loginByUsername (data) {
  return request({
    url: '/backend/login',
    method: 'post',
    config: { headers: { 'Content-Type': 'multipart/form-data' }},
    data
  })
}

export function logout () {
  return request({
    url: '/backend/logout',
    method: 'post'
  })
}

export function getUserInfo () {
  return Promise.resolve({
    data: {
      name: 'admin',
      roles: ['admin'],
      avatar: '123',
      intrduction: '酷酷酷'
    }
  })
}

export function getPublicKey () {
  return request({
    url: '/backend/um/user/getPublicKey',
    method: 'get'
  })
}

export function getVerifyCode () {
  return request({
    url: '/backend/um/user/getImage',
    method: 'get',
    responseType: 'blob'
  })
}

