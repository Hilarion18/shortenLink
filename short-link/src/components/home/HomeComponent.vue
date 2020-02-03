<template>
  <div class="home-component">
    <div class="row">
      <div class="col input-link">
        <input
          v-model="link.longUrl"
          type="urlLink"
          class="form-control"
          aria-describedby="urlLink"
          placeholder="put your link here...."
          v-on:keyup.enter="addLink"
        >
      </div>
      <div v-if="longUrl !== ''" class="col">
        <button class="button2 button--winona button--border-thin button--round-s" data-text="Shorten this link" @click="addLink"><span>Shorten this link</span></button>
      </div>
      <div v-else class="col">
        <button class="button button--winona button--border-thin button--round-s" data-text="Shorten this link" @click="addLink"><span>Shorten this link</span></button>
      </div>
    </div>
    <div class="home-content">
      <div class="d-flex justify-content">
        <div class="prev-short">
          Previously shortened by you
        </div>
        <div class="">
          <a href="" class="clear-history" @click="removeAllLinks">Clear history</a>
        </div>
      </div>
      <table class="item-table">
        <thead>
          <th class="first-th" max-length="50">LINK</th>
          <th class="th">VISITS</th>
          <th class="th">LAST VISITED</th>
        </thead>
        <tbody  >
          <tr :key="index" v-for="(link , index) in links">
            <td class="text-left td">
              <div class="row">
                <input type="hidden" id="get-link" :value="link.shortUrl">
                <div class="copy-link" href="" @click.stop.prevent="copyToClipboard(link.shortUrl)">
                  <a class="short-link" href="" >bit.ly/</a>
                  <a class="copy-link" href="#" >{{link.hashed}}</a>
                </div>
                <div class="text-cursor">click to copy this link</div>
              </div>
              <div class="td-content" v-if="link.longUrl.length<70">{{link.longUrl}}</div>
              <div v-else class="td-content">{{ link.longUrl.substring(0,70)+"..." }}</div>
            </td>
            <td class="visit">will update soon</td>
            <td class="last-visited">will update soon</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import config from '@/config.js'
import axios from 'axios'
// import style from '../style/HomeComponentStyle'

export default {
  components: {
  },
  data () {
    return {
      isLogin: false,
      links: [],
      checked: false,
      link: {
        longUrl: '',
      },
      linkToCopy: '',
      isLogin: false,
    }
  },

  methods: {
    checkLogin: function () {
      if (localStorage.getItem("token")) {
        this.isLogin = true
      }
    },

    addLink: function () {
      axios({
        method: 'POST',
        url: `${config.port}/link`,
        data: this.link,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then((result) => {
          // if (this.isLogin) {
          //   this.getLinkData()
          // } else {
            this.getLinkData()
            this.links.push(result.data.data)
          // }
        })
        .catch((err) => {
          // alert(err.message)
          alert('there is something wrong, please try again later')
        })
    },

    getLinkData: function () {
      // if (this.isLogin) {
        axios({
          method: 'GET',
          url: `${config.port}/link`,
          headers: {
            // id: localStorage.get('userId'),
            // token: localStorage.getItem('token')
          }
        })
          .then((value) => {
            this.links = value.data.data
          })
          .catch((err) => {
            alert(err.message)
          })
      // }
    },

    copyToClipboard: function (val) {
      const item = document.createElement('textarea')
      item.value = val
      item.setAttribute('type', 'text')
      document.body.appendChild(item)
      item.select()
      document.execCommand('copy');
      document.body.removeChild(item);

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert(`your url ${val} has been copied ` + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }

      /* unselect the range */
      window.getSelection().removeAllRanges()
    },

    removeAllLinks: function () {
      if (this.isLogin) {
        axios({
          method: `DELETE`,
          url: `${config.port}/link`,
          headers: {
            // id: localStorage.get('userId'),
            // token: localStorage.getItem('token')
          }
        })
          .then((value) => {
            // this.links = []
          })
          .catch((err) => {
            alert(err.message)
          })
      } else {
        this.links = []
      }
    }
  },
  watch: {
  },
  computed: {
    longUrl: function () {
      return this.link.longUrl
    }
  },

  async created() {
    this.getLinkData()
  },
}
</script>

<style scoped>
.home-component {
  padding-top: 10px;
}

/* style for input and submit row */
.input-link {
  max-width: 940px;
}

.form-control {
  width: 710px;
  color: #AAAAAA;
  background-color: #EAEAEA;
}
.form-control:focus {
  border-color: #AAAAAA;
  box-shadow: 0 1px 1px rgba(120, 114, 114, 0.75) inset, 0 0 8px rgba(120, 114, 114, 0.75)  ;
  outline: 0 none;
}

.button {
  max-height: 39px;
  cursor: pointer;
  float: left;
  min-width: 150px;
  max-width: 250px;
  display: block;
  border: none;
  background: #E0E0E0;
  color: inherit;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}

.button2 {
  max-height: 39px;
  cursor: pointer;
  float: left;
  min-width: 150px;
  max-width: 250px;
  display: block;
  border: none;
  background: #EB4A42;
  color: #fff;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}

.button:focus {
  outline: none;
}
.button > span {
  vertical-align: middle;
  color: #BFBFBF;
}
/* winona */
.button--winona {
  overflow: hidden;
  padding: 0;
  -webkit-transition: border-color 0.3s, background-color 0.3s;
  transition: border-color 0.3s, background-color 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--winona::after {
  content: attr(data-text);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  color: #3f51b5;
  -webkit-transform: translate3d(0, 25%, 0);
  transform: translate3d(0, 25%, 0);
}
.button--winona > span {
  display: block;
}
.button--winona.button--inverted {
  color: #7986cb;
}
.button--winona.button--inverted:after {
  color: #fff;
}
.button--winona::after,
.button--winona > span {
  padding: 0.5em 2em;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--winona:hover {
  border-color: #3f51b5;
  background-color: rgba(63, 81, 181, 0.1);
}
.button--winona.button--inverted:hover {
  border-color: #21333C;
  background-color: #21333C;
}
.button--winona:hover::after {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.button--winona:hover > span {
  opacity: 0;
  -webkit-transform: translate3d(0, -25%, 0);
  transform: translate3d(0, -25%, 0);
}
.button--border-thin {
  border: 0.3px solid;
}
.button--round-s {
  border-radius: 5px;
}

/* style for clearing history row */
.home-content {
  margin-top: 20px;
  color: #555555;
}
.prev-short {
  color: #555555;
}
.clear-history {
  margin-left: 10px;
  color: #EB4A42;
}
.clear-history:link {
  text-decoration: none;
}
/* .clear-history:visited {
  text-decoration: none;
} */
.copy-link {
  color: #EB4A42;
}
.copy-link:link {
  text-decoration: none;
}
.copy-link:hover + .text-cursor {
  display: block;
}

/* style for table data */
.item-table {
  margin-top: 20px;
}
.item-table td, .item-table th {
  padding: 10px 10px 10px 0px;
}
.th-scoped {
  font-family: roboto;
  font-weight: 200;
}
.first-th {
  text-align: left;
  width: 650px;
  color: #AAAAAA;
}
.th {
  text-align: center;
  width: 161px;
  color: #AAAAAA;
}
.short-link {
  color: #555555;
  padding-left: 15px;
}
.short-link:link {
  text-decoration: none;
}
.long-url {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 10px;
  width: 20px;
  max-width: 20px;
}
.text-cursor {
  display: none;
  border:3px;
  height:30px;
  width:290px;
  margin-left:200px;
  /* margin-top: -10px; */
  position: absolute;
}

.td-content {
  color: #AAAAAA;
}

html, body {
  color: #555555;
}
</style>
