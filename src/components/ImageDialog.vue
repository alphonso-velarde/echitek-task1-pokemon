<template>
  <div>
    <v-dialog
    v-model="dialog"
    max-width="800"
    >
    <v-card>
      <v-img
      :src="imgSrc"
      max-height="100%"
      aspect-ratio="1"
      class="grey lighten-2"
      contain
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
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    isShown: Boolean,
    imgSrc: String
  },
  created(){

  },
  computed:{
    dialog: {
      get () { return this.isShown },
      set () { this.$emit('closed') },
    },
  }
};
</script>
