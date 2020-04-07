<template>
<div id="back" class="container mt-5 mb-5" style="width: 700px">
     <div>
         <h2 class="card-header text-center">SIGNUP</h2>
         <br>
      <form  v-on:submit.prevent="onSubmit">
            <div class="form-group col-md-6">
              <label>Name</label>
              <input type="text" class="form-control" id="name" v-model.trim="$v.name.$model" :class="{'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid}">
              <div class="valid-feedback">You name is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.name.required">First name is required</span>
                <span v-if="!$v.name.minLength">First name must have atleast {{ $v.name.$params.minLength.min}} letters</span>
                <span v-if="!$v.name.maxLength">First name must have atmost {{ $v.name.$params.maxLength.max }} letters</span>
              </div>
            </div>

            <div class="form-group col-md-6">
              <label>Contact</label>
              <input type="text" class="form-control" id="contact" v-model.trim="$v.contact.$model" :class="{'is-invalid':$v.contact.$error, 'is-valid':!$v.contact.$invalid}">
              <div class="valid-feedback">Your contact is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.contact.required">Contact is required</span>
                <span v-if="!$v.contact.minLength">Contact must have atleast {{ $v.contact.$params.minLength.min}} letters</span>
                <span v-if="!$v.contact.maxLength">Contact must have atmost {{ $v.contact.$params.maxLength.max }} letters</span>
              </div>
            </div>
 <!--       <div class="form-group col-md-6">
              <label>Registration Number</label>
              <input type="text" class="form-control" id="register" v-model.trim="$v.register.$model" :class="{'is-invalid':$v.register.$error, 'is-valid':!$v.register.$invalid}">
              <div class="valid-feedback">Your Registration number is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.register.required">Registration number is required</span>
                <span v-if="!$v.register.minLength">Registration number must have atleast {{ $v.register.$params.minLength.min}} numbers</span>
                <span v-if="!$v.register.maxLength">Registration number must have atmost {{ $v.register.$params.maxLength.max }} numbers</span>
              </div>
            </div> -->
          <div class="form-group col-md-6">
              <label>Password</label>
              <input type="password" class="form-control" id="password" v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid}">
              <div class="valid-feedback">Your password is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.password.required">password is required</span>
                <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min}} characters minimum</span>
              </div>
            </div>
  <!--          <div class="form-group form-check col-md-6" id="form-check">
              <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleshowpassword" v-model="showpassword">
              <label for="showpassword" class="form-check-label">show password</label>
            </div>
    <div class="form-group col-md-6">
              <label>Confirm Password</label>
              <input type="password" class="form-control" id="password" v-model.trim="$v.cpassword.$model" :class="{'is-invalid':$v.cpassword.$error, 'is-valid': (password != '') ? !$v.cpassword.$invalid : ''}">
              <div class="valid-feedback">Your passwords is identical</div>
              <div class="invalid-feedback">
                <span v-if="!$v.password.required">password is required</span>
                <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min}} characters minimum</span>
              </div>
            </div> -->
  <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%">Submit</button>
  </div>

      </form>
    </div>
    </div>

</template>

<script>
import {required, minLength, maxLength, between, sameAs } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
import router from './../router'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      contact: '',
      password: '',
      name:'',
      cpassword:'',
      register:'',
      showpassword: false,
      submitstatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10)
    },
    contact: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10)
    },
    password: {
      required,
      minLength: minLength(4)
    },
    cpassword: {
      sameAsPassword: sameAs('password')
    },
    register: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(5)
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['addUsers','addpUsers']),
    onSubmit (e) {
      e.preventDefault()
      const user = {
        name: this.name,
        password: this.password,
        cpassword: this.cpassword,
        contact: this.contact,
        register: this.register
      }
      this.addUsers(user)
      this.addpUsers(user)
      router.push('./login')
    },
    toggleshowpassword () {
      var show = document.getElementById('password')
      if(this.showpassword == false) {
        this.showpassword = true
        show.type = 'text'
      }
      else {
        this.showpassword = false
        show.type = 'password'
      }
    }
  }
}
</script>
<style>

#back{
  background-image: url('268.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
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
  font-size: 20px;
}
#form-check {
  margin-left: 23px;
  font-weight: normal;
  font-size: 5px;
}
</style>
