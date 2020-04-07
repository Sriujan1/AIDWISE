import router from '../../router'
import axios from 'axios'

const state = {
  users: [],
  currentUser: [],
  loggedIn: false,
  login: []
}

const getters = {
  allUsers: state => state.users,
  user: state => state.currentUser,
  logIn: state => state.loggedIn,
  loggedIn: state => state.login
}

const actions = {
  fetchSignups ({commit}, signups) {
    commit('setSignups', signups)
  },
  addUsers ({commit}, user) {
    commit('newSignup', user)
  },
  login ({commit}, login) {
    commit('newLogin', login)
  },
  logout ({commit}) {
    commit('logot')
  }
}

const mutations = {
  setSignups (state, signups) {
    state.signups = signups
  },
  newSignup (state, signup) {
    state.users.push(signup)
    router.push('./login')
  },
  newLogin (state, login) {
    state.currentUser = state.users.filter(p => login.contact === p.contact && login.password === p.password)
    if (state.currentUser.length === 0) {
      alert('User not Registered')
    } else {
      state.loggedIn = true
      router.push('./')
    }
  },
  logot (state) {
    state.loggedIn = false
    state.currentUser.pop()
  },
  setUsers (state , users) {
    state.users = users
  }
 /* newCrops (state, crop) {
    axios.post('http://localhost:3000/users/insert/', crop, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': state.token
      }
    })
      .then((response) => {
        state.crops.push(crop)
        alert('sucessfully added')
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, */
}

export default {
  state, getters, actions, mutations
}
