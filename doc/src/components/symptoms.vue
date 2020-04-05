<template>
    <div>
        <b-row>
    <b-col>
    <div id="c1">
    <div class="" >  <!-- v-for="jobs in filteredJobs" :key="jobs.id" :name="jobs.item" -->
        <div class="card border-secondary mb-6" id="card2">
        <div class="card-header"><h4>Symptoms:- <!--{{jobs.item}} - &ensp; {{jobs.variety}}--></h4></div>
        <div class="card-body text-secondary">
          <h5 class="card-title">{{ print.Symptoms }} <!--{{jobs.cost}}--></h5>
        </div>
        </div>
    </div>
</div></b-col>
<b-col>
    <div id="c2">
    <div class="" >  <!-- v-for="jobs in filteredJobs" :key="jobs.id" :name="jobs.item" -->
        <div class="card border-secondary mb-4" id="card3" >
        <div class="card-header"><h4>Diagnosis:-<!--{{jobs.item}} - &ensp; {{jobs.variety}}--></h4></div>
        <div class="card-body text-secondary">
          <h5 class="card-title"> {{ print.Diagnosis }}</h5>
        </div>
        </div>
    </div>
</div></b-col> </b-row>
<b-row>
<b-col>
<div id="c3">
    <div class="" id="c2">  <!-- v-for="jobs in filteredJobs" :key="jobs.id" :name="jobs.item" -->
        <div class="card border-secondary mb-4" id="card4" >
        <div class="card-header"><h4>Prescription:-<!--{{jobs.item}} - &ensp; {{jobs.variety}}--></h4></div>
        <div class="card-body text-secondary">
            <h5 class="card-title"> {{ print.Prescription }}<!--{{jobs.cost}}--></h5>
        </div>
        </div>
    </div></div></b-col>
    <b-col>
<div id="c4">
    <div class="" id="c3">  <!-- v-for="jobs in filteredJobs" :key="jobs.id" :name="jobs.item" -->
        <div class="card border-secondary mb-4" id="card5" >
        <div class="card-header"><h4>Advice:-<!--{{jobs.item}} - &ensp; {{jobs.variety}}--></h4></div>
        <div class="card-body text-secondary">
          <h5 class="card-title"> {{ print.Advice }}<!--{{jobs.cost}}--></h5>
        </div>
        </div>
    </div>
    </div></b-col>
    </b-row>
                <b-button class="btn" @click="$bvModal.show('bv-modal-example')" v-on:click="onsubmit">Edit</b-button>
                    <b-modal id="bv-modal-example" hide-footer>
                <div class="d-block text-center">
                    <div id="gif"></div>
                </div>
               <router-link to="/symptoms"> <b-button class="mt-3" type="submit"  block>Submit</b-button></router-link>
                </b-modal>  
        <b-button class="btn"  >submit</b-button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: '',
    data () {
        return {
            print: {},
        }
    },
    components: {
        
    },
    methods: {
         onsubmit: function () {
            // alert('Prescription has been changed!')
            var _this = this
            axios.post('http://localhost:4000/edit/')
               .then((response) =>{
                    console.log(response.data)
                    _this.print = response.data
                    
                })
                .catch((error) => {
                     console.log(error)
                })

         }
    },
    mounted: function () {
        var _this = this
    axios.post('http://localhost:4000/print')
      .then((response) =>{
           console.log(response.data)
         _this.print = response.data
        
         })
        .catch((error) => {
        console.log(error)
      })
},
 computed: {
    ...mapGetters(['allpUsers','plogIn'])
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
    margin-top: 10%;
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
    margin-top: 10%;
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

.btn {
    margin-bottom: 100px;
}

#gif {
  background: url('voice1.gif');
  width: 70vh;
  height: 360px;
}

#class {
  margin-top: -35px;
  margin-bottom: 30px;
  margin-left: 25;
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

</style>
