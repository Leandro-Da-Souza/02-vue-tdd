<template>
  <div>
    <input type="text" placeholder="Meddelande..." v-model="message" @keyup="handleKey" />
    <p class="message">{{message}}</p>
    <span>You Pressed:</span>
    <p class="key">{{key}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      key: "",
    };
  },
  methods: {
    handleKey(event) {
      const pattern = /[a-zA-ZöäåÖÄÅ0-9]/;
      if (pattern.test(event.key)) {
        this.key = event.key;
      }
    },
  },
};
</script>

<style scoped>
div {
  border: 1px grey solid;
  margin: 10px 0;
}
</style>