/*
  purpose: To handle all calls to the api
*/

const APIManager = Object.create(null, {

  getAllPlantInformation: {
    value: (url) => {
      return fetch(`${url}`, {
        headers: {
          'content-type': 'application/json'
        }
      })
    }
  },

  postAQuote: {
    value: (url, requestObj) => {
      return fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify( requestObj ),
        headers: new Headers ({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      })
    }
  }
})

export default APIManager