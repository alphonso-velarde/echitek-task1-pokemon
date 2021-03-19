<template>
  <v-container>
    <v-row v-if="!isPokemonApiLoading">
      <v-col class="mt-10" md="6" offset-md="3" sm="12">
        <div class="view-pokemon--div">
          <h1 class="capitalize">{{ pokemon.species.name }}</h1>
          <v-row class="mt-1">
            <v-col cols="12" md="6">
              <h2 class="view-pokemon--header">Base Stats</h2>
              <div class="mt-2">
                <p v-for="(item, index) in pokemon.stats" :key="index" cols="12" sm="6">
                  <span class="capitalize"><b>{{item.stat.name}}:</b></span> &nbsp;
                  <span class="view-pokemon--stats">{{item.base_stat}}</span>
                </p>
              </div>
              <h2 class="view-pokemon--header">Abilities</h2>
              <div class="mt-2">
                <p v-for="(item, index) in pokemon.abilities" :key="index" cols="12" sm="6">
                  {{item.ability.name}}
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-row>
                <v-col v-for="img in images" :key="img" cols="12" sm="6">
                  <v-img
                    :src="img"
                    max-height="150px"
                    aspect-ratio="1"
                    class="grey lighten-2 view-pokemon--image"
                    contain
                    @click="openModal(img)"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row class="mb-1">
                <v-col cols="12" md="6">
                  <h2 class="view-pokemon--header">Move Sets</h2>
                </v-col>
              </v-row>
              <v-chip
                v-for="(item, index) in pokemon.moves"
                :key="index"
                class="ma-2"
                color="secondary"
              >
                {{item.move.name}}
              </v-chip>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <loader v-if="isPokemonApiLoading"></loader>
    <image-dialog @closed="closeModal()" :isShown="isImageViewerShown" :imgSrc="imgSrc"></image-dialog>
  </v-container>
</template>

<script>
import loader from '@/components/Loader.vue'
import { mapState } from "vuex";
import ImageDialog from '../components/ImageDialog.vue';
export default {
  components: {loader, ImageDialog},
  data() {
    return {
      images: [],
      isImageViewerShown:false,
      imgSrc: ""
    };
  },
  watch: {
    pokemon() {
      this.addImages();
    },
  },
  computed: {
    ...mapState({
      pokemon: (state) => state.pokemon.currentPokemon,
      isPokemonApiLoading: (state) => state.pokemon.isPokemonApiLoading,
    }),
  },
  methods: {
    addImages() {
      for (let [key, value] of Object.entries(this.pokemon.sprites)) {
        if(key.includes("back") || key.includes("front")){
          value ? this.images.push(value): null;
        }
      }
    },
    closeModal(){
      this.isImageViewerShown = false;
    },
    openModal(src){
      this.imgSrc = src;
      this.isImageViewerShown = true;
    }
  },
  created() {
    this.$store.dispatch("getPokemon", this.$route.params.name);
  },
};
</script>
