<template>
<div>
   
<div class="card text-white bg-dark mb-3" style="margin:5%" v-for="currentUser in user" :key="currentUser.name" >
  <div class="card-body text-white">
      <div class="row">
        <div class="col-sm-12">
            <h4 class="card-title"><strong>Name :- </strong>{{currentUser.name}}</h4>
          </div>
      </div>
      <br>
      <div class="row">
          <div class="col-sm-5">
            <h4 class="card-title"><strong>Contact Number :- </strong>{{currentUser.contact}}</h4>
          </div>
      </div>
      
  </div>
</div>
<br>
<div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-3" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info">Start Precription</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <form action="" v-on:submit.prevent="onSubmit">
            <div>
                <label for="pid">Patient id: </label>
                <input type="text" v-model="pid" placeholder="Enter id">
            </div>
            <br>
            <div>
                <label for="pid">Patient Name: </label>
                <input type="text" placeholder="Enter name" v-model="name">
            </div>
            <br>
            <div>
                <label for="pid">Password: </label>
                <input type="password" placeholder="Enter password" v-model="password">
            </div>
            <br>
            <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%">Submit</button>
  </div>
            <div>
               <!-- <router-link to="/patient"> <b-button class="mt-3" type="submit" block>Submit</b-button></router-link>
-->
               <b-button class="btn btn-outline-dark mt-3" block id="class" variant="light" v-on:click="onsubmit" @click="$bvModal.show('bv-modal-example')">START...</b-button>
               <b-modal id="bv-modal-example" hide-footer>
                <div class="d-block text-center">
                    <div id="gif"></div>
                </div>
               <router-link to="/symptoms"> <b-button class="mt-3" type="submit" block>Submit</b-button></router-link>
                </b-modal>  
            </div>
          </form>
        </b-card-body>
      </b-collapse>
    </b-card> </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from './../router'
export default {
  name: 'profile',
  components: {
  },
  data () {
    return {
        modalShow: false,
        pid: '',
        name: '',
        password: ''
    }
  },methods: {
        
         onsubmit: function () {
            // alert('Prescription has been changed!')
            var _this = this
            axios.post('http://localhost:4000/assist/')
               .then((response) =>{
                    console.log(response.data)
                })
                .catch((error) => {
                     console.log(error)
                })

         },
       ...mapActions(['addpUsers']),
    onSubmit (e) {
      e.preventDefault()
      const puser = {
        pid: this.pid,
        name: this.name,
        password: this.password
      }
      this.addpUsers(puser)
     // router.push('./plogin')
    }
  },
  computed: {
    ...mapGetters(['user','logIn'])
  }
}
</script>
<style>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#trans{
    text-decoration: none;
    color: black;
    font-size: 60%;
}
.card{
  border-color: black;
}
#big{
  border-style: solid;
  border-width: 4px;
}
h3 {
  color: white;
  text-align: left;
  }

#class {
  margin-top: -35px;
  margin-bottom: 30px;
  margin-left: 25;
}

#gif {
  background: url('voice1.gif');
  width: 65vh;
  height: 360px;
}
</style>
