import pokemon from '@/api/pokemon'

export default {
    state: {
        pokemonList: {
            count: 0,
            results: [],
        },
        isPokemonApiLoading: true,
        pageOptions:{
            page: 1,
            itemsPerPage: 5,
        },
        currentPokemon:{}
    },
    mutations: {
        setPokemonList(state, data){
            state.pokemonList = data;
        },
        setPokemonApiLoading(state, data){
            state.isPokemonApiLoading = data;
        },
        setCurrentPokemon(state, data){
            state.currentPokemon = data;
        },
        setPageOptions(state, data){
            state.pageOptions = data;
        },
    },
    actions: {
        async getPokemonList(context, data){
            context.commit('setPokemonApiLoading', true)
            try {
                context.commit('setPageOptions', data);
                const resp = await pokemon.getPokemonList(data);
                context.commit('setPokemonList', resp.data);
                context.commit('setPokemonApiLoading', false)
            } catch(e){
                console.log(e);
            }
        },
        async getPokemon(context, data){
            context.commit('setPokemonApiLoading', true)
            try {
                const resp = await pokemon.getPokemon(data);
                context.commit('setCurrentPokemon', resp.data);
                context.commit('setPokemonApiLoading', false)
            } catch(e){
                console.log(e);
            }
        }
    }
}