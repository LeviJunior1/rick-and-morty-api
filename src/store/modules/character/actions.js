import {
    getCharacter
} from '@/api/character'

const actions = {
    async getCharacter({ commit }, params) {
        await  getCharacter(params)
        .then(res => {
            commit('GET_CHARACTER', res)
        })
        .catch(err => console.log(err))
    }
}

export default actions
