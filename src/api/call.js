import 'whatwg-fetch'

const handleCatch = (error, errorCallback) => {
  errorCallback(error)
}

const handleResponse = (response, errorCallback, successCallback) => {
  if (!response || response.error === true || response.status >= 400) {
    response.json().then(({ errors }) => errorCallback(errors))
  } else {
    response.json().then(successCallback)
  }
}

export const call = (auth, url, data, successCallback, errorCallback) => {
  const accessToken = localStorage.getItem('token')

  const headers = accessToken ? 
    new Headers({
        'Authorization': `OAuth ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }) : 
    new Headers({ 
      'Content-Type': 'application/x-www-form-urlencoded'
    })

  const requestDetails = Object.assign({}, data, { headers: headers })

  fetch((auth ? process.env.REACT_APP_API_AUTH_HOST : process.env.REACT_APP_API_HOST) + `/${url}`, requestDetails)
    .then(response => handleResponse(response, errorCallback, successCallback))
    .catch(error => handleCatch(error, errorCallback))
}
