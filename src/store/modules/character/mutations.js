import {
    GET_CHARACTER
} from '@/store/mutation-types'

const mutations = {
    [GET_CHARACTER](state, value) {
        state.listCharacter = value
    }
}

export default mutations
