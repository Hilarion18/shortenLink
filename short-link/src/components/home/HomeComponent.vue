<template>
  <div class="home-component">
    <div class="scope-input row">
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
      <div class="col col-button">
        <button class="button button--winona button--border-thin button--round-s" data-text="generate link" @click="addLink" ><span>generate link</span></button>
      </div>
    </div>
    <div class="container home-content">
      <div class="row">
        <h5 class="text-left">Previously shortened by you</h5>
        <a href="" class="clear-history" @click="removeAllLinks">Clear history</a>
      </div>
      <table class="item-table">
        <thead>
          <th class="first-th" max-length="50">Link</th>
          <th class="th">Visits</th>
          <th class="th">Last Visited</th>
        </thead>
        <tbody  >
          <tr :key="index" v-for="(link , index) in links">
            <td class="text-left td">
              <div class="row">
                <input type="hidden" id="get-link" :value="link.shortUrl">
                <a class="copy-link" href="" @click.stop.prevent="copyToClipboard">{{link.shortUrl}}</a>
                <div class="text-cursor">click to copy this link</div>
              </div>
              <a class="long-url" v-if="link.longUrl.length<50">{{link.longUrl}}</a>
              <a v-else>{{ link.longUrl.substring(0,50)+"..." }}</a>
            </td>
            <td class="visit">will be update soon</td>
            <td class="last-visited">will be update soon</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
// import config from '@/config.js'
import axios from 'axios'
import LinkService from '@/api/LinkService'

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
      isLogin: false
    }
  },
  // template: `
  //   <textarea v-model="internalValue" @keydown="onKeyDown"></textarea>
  // `,
  methods: {
    checkLogin: function () {
      // if (localStorage.getItem("token")) {
      //   this.isLogin = true
      // }
    },

    addLink: function () {
      // axios({
      //   method: 'POST',
      //   url: `${config.port}link`,
      //   data: this.link,
      //   headers: {
      //     token: localStorage.getItem("token")
      //   }
      // })
      //   .then((result) => {
      //     // if (this.isLogin) {
      //     //   this.getLinkData()
      //     // } else {
      //       this.getLinkData()
      //       this.links.push(result.data.data)
      //     // }
      //   })
      //   .catch((err) => {
      //     // alert(err.message)
      //     alert('there is something wrong, please try again later')
      //   })
    },

    getLinkData: function () {
      // if (this.isLogin) {
      //   axios({
      //     method: 'GET',
      //     url: `${config.port}/link`,
      //     headers: {
      //       // id: localStorage.get('userId'),
      //       // token: localStorage.getItem('token')
      //     }
      //   })
      //     .then((value) => {
      //       this.links = value.data.data
      //     })
      //     .catch((err) => {
      //       alert(err.message)
      //     })
      // }
    },

    copyToClipboard: function () {
      let testingCodeToCopy = document.querySelector('#get-link')
      testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
      testingCodeToCopy.select()
      let item = document.getElementById('get-link').value

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert(`your url ${item} has been copied ` + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },

    removeAllLinks: function () {
      // if (this.isLogin) {
      //   axios({
      //     method: `DELETE`,
      //     url: `${config.port}/link`,
      //     headers: {
      //       // id: localStorage.get('userId'),
      //       // token: localStorage.getItem('token')
      //     }
      //   })
      //     .then((value) => {
      //       // this.links = []
      //     })
      //     .catch((err) => {
      //       alert(err.message)
      //     })
      // } else {
      //   this.links = []
      // }
    }
  },
  // watch() {
  //   this.links
  // },

  async created() {
    try {
      this.links = await LinkService.getLinkData()
    } catch (err) {
      alert(err.message)
    }
    // this.getLinkData()
    // this.checkLogin()
  },
}
</script>

<style scoped>
  .scope-input {
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
  }
  .item-table {
    margin-top: 20px;
  }
  .item-table td, .item-table th {
    /* border: 1px solid #ddd; */
    padding: 10px;
    /* max-width: 200px; */
  }
  .first-th {
    text-align: left;
    width: 418px;
  }
  .th {
    width: 161px;
  }
  .long-url {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 10px;
    width: 20px;
    max-width: 20px;
  }
  .copy-link {
    padding-left: 15px;
    /* padding-bottom: 15px; */
  }
  .text-cursor {
    display: none;
    /* border:1px solid #000; */
    height:30px;
    width:290px;
    margin-left:200px;
    /* margin-top: -10px; */
    position: absolute;
  }

  .copy-link:hover + .text-cursor {
      display: block;
  }

  .button {
    max-height: 39px;
    cursor: pointer;
    float: left;
    min-width: 150px;
    max-width: 250px;
    display: block;
    border: none;
    background: none;
    color: inherit;
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
    border: 1px solid;
  }
  .button--round-s {
    border-radius: 5px;
  }
  .home-content {
    margin-top: 20px;
  }
  .clear-history {
    margin-left: 10px;
  }
  /* .row {
    padding-bottom: 10px;
  } */
  html,body{
    font-size: 16px;
    background-color: #303E58;
    color:#FFF;
  }

  .form-control:focus {
      border-color: #C3595B;
    box-shadow: 0 1px 1px rgba(190, 88, 90,.75) inset, 0 0 8px rgba(190, 88, 90,.75);
    outline: 0 none;
  }
  footer {
      background-color: rgb(190, 88, 90);
      position: fixed;
      bottom: 0;
      left:0;
      width: 100%;
  }
  footer a {
      color: #FFF;
  }

  footer a:hover {
      color: #303E58;
      text-decoration: none;
  }
</style>
