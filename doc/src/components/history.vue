<template>
<div>
<div>
    <div classs="chat__main">
        <div class="chat__messages">
            <div id="c2">
                <div class="" >  <!-- v-for="jobs in filteredJobs" :key="jobs.id" :name="jobs.item" -->
                <div class="card border-secondary mb-4" id="card3" >
               
                <div class="card-body text-secondary">
                <h4 class="card-title">Symptoms:- {{ print.Symptoms }}</h4>
            </div>
        </div>
    </div>
</div>
<div id="c2">
    <div class="" >  
        <div class="card border-secondary mb-4" id="card2" >
        <div class="card-body text-secondary">
          <h4 class="card-title">Diagnosis:- {{ print.Diagnosis }}</h4>
        </div>
        </div>
    </div>
</div>
<div id="c2">
    <div class="" > 
        <div class="card border-secondary mb-4" id="card1" >
        <div class="card-body text-secondary">
          <h4 class="card-title">Prescription:- {{ print.Prescription }}</h4>
        </div>
        </div>
    </div>
</div>
<div id="c2">
    <div class="" > 
        <div class="card border-secondary mb-4" id="card0" >
        <div class="card-body text-secondary">
          <h4 class="card-title">Advice:- {{ print.Advice }}</h4>
        </div>
        </div>
    </div>
</div>
            </div>
    </div>
</div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import patient from '@/components/patient.vue'
export default {
    name: 'history',
    components: {
        patient
    },
    data () {
        return {
            print: {}
        }
    },
    ...mapGetters('plogIn'),
     mounted: function () {
        var _this = this
        axios.post('http://localhost:3000/print')
        .then((response) =>{
           console.log(response.data)
         _this.print = response.data
        
         })
        .catch((error) => {
        console.log(error)
      })
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
.chat__main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
}

.chat__messages {
    flex-grow: 1;
    padding: 24px 24px 0 24px;
   
}

#card3 {
    position: relative;
    border: none;
    width: 70%;
    margin-left: 15%;
    margin-top: 2%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
 box-shadow: 4px 4px 30px 7px rgba(0,0,0,0.2);
 border: white;
 text-align: center;
 font-weight: bold;
 }
 #card2 {
     position: relative;    
    border: none;
    width: 70%;
    margin-left: 15%;
    margin-top: 0%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
 box-shadow: 4px 4px 30px 7px rgba(0,0,0,0.2);
 border: white;
 text-align: center;
 font-weight: bold;
 }
 #card1 {
     position: relative;
    border: none;
    width: 70%;
    margin-left: 15%;
    margin-top: 2%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
 box-shadow: 4px 4px 30px 7px rgba(0,0,0,0.2);
 border: white;
 text-align: center;
 font-weight: bold;
 }
 #card0 {
     position: relative;
    border: none;
    width: 70%;
    margin-left: 15%;
    margin-top: 2%;
    margin-bottom: 0%;
    margin-right: 0%;
    border-style: solid;
 box-shadow: 4px 4px 30px 7px rgba(0,0,0,0.2);
 border: white;
 text-align: center;
 font-weight: bold;
 }

 

</style>