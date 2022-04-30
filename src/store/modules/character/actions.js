import {
    getCharacter
} from '@/api/character'

const actions = {
    getCharacter({ commit }) {
        return getCharacter
            .then(res => {
                commit('GET_CHARACTER', res)
            })
            .catch(err => console.log(err))
    }
}

export default actions
