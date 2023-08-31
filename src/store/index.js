import { createStore } from "vuex";
import journalModule from '@/modules/daybook/store/journal/index'


const store = createStore({
    namespaced: true,
    modules: {
        journal: journalModule
    }
})

export default store