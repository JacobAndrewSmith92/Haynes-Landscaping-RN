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
      return fetch(`${url}quotes`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: requestObj.toString()
      })
      .catch(error => error)

    }
  }
})

export default APIManager