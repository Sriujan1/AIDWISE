<template>
<div>  
  <div>
    <div id="back" class="container mt-5 mb-5" style="width: 700px" v-if="plogIn === false">
      <form  v-on:submit="onSubmit">
        <div class="col-md-6">
        <label for="contact">Patient id:</label>
        <input type="text" class="form-control" id="contact" v-model="pid" required>
        </div><br>
  <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%" v-on:click="onSubmit">Submit</button>
  </div>

      </form>
    </div>

  </div>
  <div v-if="plogIn === true"> 
<div class="card text-white bg-dark mb-3" style="margin:5%" v-for="patientuser in patient" :key="patientuser.name" >
  <div class="card-body text-white">
      <div class="row">
        <div class="col-sm-12">
            <h4 class="card-title"><strong>Patient Name :- </strong>{{ patientuser.pid }}</h4>
          </div>
      </div>
      <br>
      <div class="row">
          <div class="col-sm-5">
            <h4 class="card-title" ><strong>Patient id :- </strong>{{ patientuser.name }}</h4>
          </div>
      </div> 
  </div>
</div>
</div>
<br>
</div>
</template>

<script>
import symptoms from '../components/symptoms'
//import samjson from '../components/json/sam.json'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'patient',
  components: {
    symptoms
  },
  data () {
    return {
      pid: ''
      // myjson: samjson 
    }
  },
  methods: {
    ...mapActions(['plogin']),
    onSubmit (e) {
      e.preventDefault()
      const plogin = {
        pid: this.pid
      }
      this.plogin(plogin)
    },
    onSubmit () {
      this.$router.push('/symptoms')
    }
  },
  computed: {
    ...mapGetters(['patient','user','plogIn'])
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
#card2{
    border: none;
    border: white;
    width: 75%;
    margin-left: 20%;
    margin-top: 0%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);

    }

    #card4{
    border: none;
    border: white;
    width: 75%;
    bottom: 10vh;
    margin-left: 20%;
    margin-top: 0%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);

    }
    #card5{
    border: none;
    border: white;
    width: 75%;
    bottom: 10vh;
    margin-left: 5%;
    margin-top: 0%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);

    }


#card3{
    border: none;
    border-color: white;
    width: 75%;
    margin-left: 5%;
    margin-top: 0%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);

    }

#c1 {
    width: 100%;
    margin-right: 10;
    margin-bottom: 20px;
}

#c2 {
    margin-bottom: 20%;
}
</style>
