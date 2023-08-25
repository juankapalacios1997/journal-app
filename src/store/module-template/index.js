import * as actions from './state'
import * as getters from './state'
import * as mutations from './state'
import state from './state'

const myModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default myModule