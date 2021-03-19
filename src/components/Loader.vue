<template>
  <v-row>
    <v-col class="mt-16" md="6" offset-md="3" sm="12">
      <v-img
        :src="require('../assets/loader.gif')"
        max-height="100px"
        aspect-ratio="1"
        contain
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
