const getters = {
    getCharacter: state => {
        const result = state.listCharacter?.data?.results
        const info = state.listCharacter?.data?.info
        return { result, info } 
    }
}

export default getters
