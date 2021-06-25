import { ActionContext } from 'vuex'
import axios from "axios"
import { State } from '@/store/index'

export interface AuthState {
  nickname: string
  email: string
  avatar: string
  role: string
}

export const authModule = {
  namespaced: true,
  state: (): AuthState => ({
    nickname: '',
    email:    '',
    avatar:   '',
    role:     '',
  }),
  getters: {
    isAuthenticated(state: AuthState): boolean {
      return state.email != ''
    }
  },
  mutations: {
    update(state: AuthState, payload: AuthState): void {
      state.nickname = payload.nickname
      state.email    = payload.email
      state.avatar   = payload.avatar
      state.role     = payload.role
    },
    clear(state: AuthState): void {
      state.nickname = ''
      state.email    = ''
      state.avatar   = ''
      state.role     = ''
    },
  },
  actions: {
    fetchAuthInfo(context: ActionContext<AuthState, State>): void {
      axios.get(`/api/user/self/`).then(response => {
        context.commit('update', response.data)
      }).catch(() => {
        context.commit('clear')
      })
    },
  },
}
