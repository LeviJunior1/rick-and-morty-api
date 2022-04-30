const getters = {
    getCharacter: state => {
        const result = state.listCharacter?.data?.results
        const info = state.listCharacter?.data?.info
        return { result, info } 
    },
    getPages: state => {
        const pages = state.listCharacter?.data?.info.pages || 0
        return pages
    }
}

export default getters
