<template>
  <v-container>
    <v-row>
      <v-col class="mt-10" md="4" offset-md="4" sm="12">
        <div class="pokemon--table">
          <h1>Pokemon List</h1>
          <pokemon-table class="mt-1"></pokemon-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PokemonTable from '@/components/PokemonTable.vue'
export default {
  components: {
    PokemonTable
  },
  data(){
    return {

    }
  },
  computed: {
  },
  created(){
    
  }
}
</script>
