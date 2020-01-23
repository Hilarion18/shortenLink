import Link from '../models/link'
import Bitly from '../helpers/hashLink'

module.exports = {
  getLinks: (req,res) => {
    Link.find({})
    .then((data) => {
      res.status(200).json({
        data,
        message: `get links`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `data failure to get`
      })
    })
  },
  hashLink: (req,res) => {
    Bitly.shorten({longUrl: req.body.longUrl}, function(err, results) {
      // Do something with your new, shorter url...
      if (err) {
        res.status(500).json({
          message: `something trouble with your link`
        })
      }
      if (results) {
          const result = JSON.parse(results)
          if (result.status_code === 200) {
          let linkData = new Link ({
            longUrl: req.body.longUrl,
            shortUrl: result.data.url,
            hashed: result.data.hash
          })
          linkData.save()
          .then((data) => {
            res.status(201).json({
              data,
              message: `get links`
            })
          })
          .catch((err) => {
            res.status(500).json({
              err,
              message: `data failure to get`
            })
          })
        } else {
          res.status(result.status_code).json({
            message: `there is something wrong with connection`
          })
        }
      }
      console.log(`err`, err)
      console.log(`results`, results)
    });
  },
  deleteOne: (req,res) => {

  },
  deleteAll: (req,res) => {
    
  }
}