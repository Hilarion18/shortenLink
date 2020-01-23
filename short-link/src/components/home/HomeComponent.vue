<template>
  <div class="home-component">
    <div class="scope-input row">
      <div class="col input-link">
        <input
          v-model="uriLink"
          type="urlLink"
          class="form-control"
          aria-describedby="urlLink"
          placeholder="put your link here...."
        >
      </div>
      <div class="col button">
        <!-- <button height="200px">get</button> -->
        <input class="button is-primary margin-bottom" type="submit" @click="addLink" />
          <!-- <b-row>
            <b-col lg="4" class="pb-2"><b-button size="sm">Small Button</b-button></b-col>
          </b-row> -->
      </div>
    </div>
    <p>This is the result: {{uriLink}}</p>
    <table>
      <thead>
        <th>Link</th>
        <th>Visits</th>
        <th>Last Visited</th>
      </thead>
      <tbody>
        <td></td>
      </tbody>
    </table>
    <ul>
      <li :key="index" v-for="(link , index) in links">
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      uriLink: '',
      isLogin: false,
      links: [],
      checked: false
    }
  },
  methods: {
    addLink () {
      this.links.push(this.uriLink)
      this.uriLink = ''
    }
  }
}
</script>

<style scoped>
  .home-component {
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
  }
  /* .input-link {
    max-width: 900px;
    max-height: 900px;
  } */
  .button {
    height: 39px;
  }
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
