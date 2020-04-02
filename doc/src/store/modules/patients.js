import router from '../../router'

const state = {
    patientUser: [],
    pusers: [],
    ploggedIn: false,
    plogin: []
}

const getters =  {
    allpUsers: state => state.pusers,
    puser: state => state.patientUser,
    plogIn: state => state.ploggedIn,
    ploggedIn: state => state.plogin,
}

const actions = {
    addpUsers ({commit}, puser) {
        commit('newpSignup', puser)
      },
      plogin ({commit}, plogin) {
        commit('newpLogin', plogin)
      },
      logout ({commit}) {
        commit('logot')
      }
}

const mutations = {
    newpSignup (state, signup) {
        state.pusers.push(signup)
       // router.push('./')
      },
    newpLogin (state, login) {
        state.patientUser = state.pusers.filter(p => login.id === p.id && login.password === p.password)
        if (state.patientUser.length === 0) {
          alert('Patient not Registered')
        } else {
          state.ploggedIn = true
          router.push('./symptoms')
        }
      },
    logot (state) {
        state.ploggedIn = false
        state.patientUser.pop()
      }
}

export default {
    state, getters, actions, mutations
  }