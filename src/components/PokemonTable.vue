<template>
  <div class="home">
    <v-data-table
      :headers="headers"
      :items="pokemonList.results"
      :options.sync="options"
      :server-items-length="pokemonList.count"
      :loading="isPokemonApiLoading"
      :footer-props="footerProps"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item="props">
        <tr>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right"><v-btn color="secondary" :to="{ name: 'PokemonViewer', params: { name: props.item.name }}"><font-awesome-icon icon="hand-pointer" /></v-btn></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      footerProps: {'items-per-page-options': [5, 10, 15, 20]},
      options: {},
      headers: [
        {
          text: "Pokemon Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "Action"
        },
      ],
    };
  },
  methods: {
    getPokemonList() {
      const { page, itemsPerPage } = this.options;
      let data = {
        page: page,
        itemsPerPage: itemsPerPage,
      };
      this.$store.dispatch("getPokemonList", data);
    },
  },
  watch: {
    options: {
      handler() {
        this.getPokemonList()
      },
      deep: true,
    },
  },
  mounted(){
    //this.getPokemonList()
  },
  computed: {
    ...mapState({
      pokemonList: (state) => state.pokemon.pokemonList,
      isPokemonApiLoading: (state) => state.pokemon.isPokemonApiLoading,
      pageOptions: (state) => state.pokemon.pageOptions,
    }),
  },
  created() {
    if(this.pageOptions){
      this.options.page = this.pageOptions.page;
      this.options.itemsPerPage = this.pageOptions.itemsPerPage;
    }
  },
};
</script>
