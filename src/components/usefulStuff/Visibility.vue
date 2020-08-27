<template>
  <div>
    Antigen synlig eller osynlig
    <div class="maybeVisible" v-show="showIt">Kanske Synlig Eller Borttagen</div>
    <button @click="toggleShow" class="toggleShow">Ändra synlighet</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleShow() {
      this.showIt = !this.showIt;
    },
  },
  data() {
    return {
      showIt: true,
    };
  },
};
</script>

<style>
</style>