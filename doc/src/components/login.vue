<template>
<div id="back" class="container mt-5 mb-5" style="width: 700px">
     <div>
         <h2 class="card-header text-center">LOGIN</h2>
         <br>
      <form  v-on:submit="onSubmit">
        <div class="col-md-6">
        <label for="contact">Contact Number</label>
        <input type="text" class="form-control" id="contact" v-model="contact" required>
        </div>
        <br>
    <div class="form-group col-md-6">
    <label for="pass">Password</label>
    <input type="password" class="form-control" v-model="password" id="pass" required>
  </div>
  <br>
  <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%">LOGIN</button>
  </div>

      </form>
    </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      contact: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['login']),
    onSubmit (e) {
      e.preventDefault()
      const login = {
        contact: this.contact,
        password: this.password
      }
      this.login(login)
    }
  }
}
</script>

<style>

#back{
  background-image: url('268.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 340px;
}
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 1.5rem;
  line-height: 0.8;
  letter-spacing: -0.005em;
}
h2 {
  color: black;
  font-weight: bold;
  letter-spacing: -0.005em;
}
label {
  text-align: center;
  color: black;
  font-weight: bold;
}
</style>

