import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { AuthState, authModule } from '@/store/modules/auth'

export interface State {
  auth: AuthState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    auth: authModule,
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}
