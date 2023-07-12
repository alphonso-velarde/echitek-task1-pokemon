import axios from 'axios';
import {getPokemonUrl} from '@/env-vars'

export default {
    getPokemonList(data){
        return axios.get(`${getPokemonUrl}?limit=${data.itemsPerPage}&offset=${data.page + data.itemsPerPage}`)
    },
    getPokemon(name){
        return axios.get(`${getPokemonUrl}/${name}/`)
    }
}