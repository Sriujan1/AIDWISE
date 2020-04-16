<template>
<div class="background">
  <div class="container">
    <h1>Doctor 
      <span class="typed-text">{{typeValue}}</span>
      <span class="cursor" :class="{'typing' : typeStatus}">&nbsp;</span>
    </h1>
   
  </div>
  <div>
  </div>
  
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import  axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      name:'',
      symptoms:'',
      typeValue: '',
      typeStatus: false,
      typeArray: ['prescription that matters','is a person next to god',',our patient always comes first','is life'],
      typingSpeed: 90,
      erasingSpeed: 90,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    Start () {
      axios.post('http://localhost:4000/crop/')
      .then((response) => {
        console.log(response)
      })
    },
    typeText () {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1

        setTimeout(this.typeText, this.typingSpeed)
      }
      else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if(this.charIndex > 0){
        if(!this.typeStatus)
          this.typeStatus = true

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      }
      else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0

        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  },
  created () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  computed: {
    ...mapGetters(['logIn'])
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
.background {
  background-image: url('6.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
} 
h2 {
  color: black;
  font-weight: bold;
}
label {
  text-align: center;
  color: black;
  font-weight: bold;
}


.container {
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

span.typed-text {
  color: #d2b94b;
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: black;
  animation: cursorblink 1s infinite;
}



@keyframes cursorblink {
  49% { background-color: white; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}

#inline {
  margin-left: 200px;
}
</style>
