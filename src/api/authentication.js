import { call } from './call'

export const authorizeToken = (code, successCallback, errorCallback) =>
  call(
    true,
    'token',
    { 
      method: 'POST',
      body: `grant_type=authorization_code&code=${code}&client_id=bd16a9c712a64c9ba6d5577fdf693ea1&client_secret=0543e68a981b435695b7de4f7b1aeddd`
    },
    successCallback,
    errorCallback
  )
