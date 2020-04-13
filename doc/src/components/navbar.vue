<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand">AIDWISE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="logIn === false">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">
        <a class="nav-link"> Home </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login">
        <a class="nav-link"> Login </a>
        </router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/signup">
        <a class="nav-link"> Sign up </a>
        </router-link>
      </li>
   <!--   <li class="nav-item ">
        <router-link to="/plogin">
        <a class="nav-link"> Patients </a>
        </router-link>
      </li> -->
    </ul>
 <!--   <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>  -->
  </div>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" v-for="currentUser in user" :key="currentUser.name">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">
        <a class="nav-link"> Home </a>
        </router-link>
      </li>
      
      <li class="nav-item ">
        <router-link to="/profile">
        <a class="nav-link"> Profile </a>
        </router-link>
      </li>
      <li class="nav-item ">
        <a class="nav-link" @click="onSubmit"> Logout </a>
      </li>
    </ul>
  <!--  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router'
export default {
  data () {
    return {
      modalShow: false
    }
  },
  methods: {
    ...mapActions(['logout']),
    onSubmit (e) {
      e.preventDefault()
      this.logout()
      router.push('./login')
    }
  },
  computed: {
    ...mapGetters(['logIn','user'])
  }
}
</script>

<style>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: aliceblue;
}

#nav{
  font-family:sans-serif;
}
.nav-link{
  color: aliceblue;
  text-decoration: none;
}

.navbar {
font-size: 20px;
line-height: 35px;
letter-spacing: 0.019em;
font-weight: 700;
font-style: normal;
}

</style>
