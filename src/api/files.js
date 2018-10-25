import { call } from './call'

export const fetchFiles = (path, successCallback, errorCallback) =>
  call (
    false,
    `disk/resources?path=${path}`,
    { method: 'GET' },
    successCallback,
    errorCallback
)