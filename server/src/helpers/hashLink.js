require('dotenv').config()
import BitlyAPI from "node-bitlyapi"

var Bitly = new BitlyAPI({
	client_id: process.env.BITLY_ID,
	client_secret: process.env.BITLY_SECRET
});
const bitly_token = [process.env.BITLY_TOKEN]
Bitly.setAccessToken(bitly_token);

export default Bitly