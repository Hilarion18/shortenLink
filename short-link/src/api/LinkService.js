import axios from 'axios'

const url = 'api/link'

class LinkService {
  // get links
  static getLinkData () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios({
          method: 'GET',
          url: url,
          headers: {
            // id: localStorage.get('userId'),
            // token: localStorage.getItem('token')
          }
        })
        const data = res.data
        console.log(`data`, data)
        resolve(
          data.data.map(link => ({
            ...link
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  static insertLink (val) {
    try {
      return axios({
        method: 'POST',
        url: url,
        data: val,
        headers: {
          // token: localStorage.getItem("token")
        }
      })
    } catch (err) {

    }
  }
}

export default LinkService
