<template>
  <div id="app">
    <h1>Welcome to Vue.js</h1>
    <div class="bottom">
      <OnOff />
      <Counter />
      <Minus />
      <Options />
      <Visibility />
      <Input />
    </div>
  </div>
</template>

<script>
import OnOff from "./onoff/OnOff";
import Counter from "./counter/Counter";
import Minus from "./minus/Minus";
import Options from "./options/Options";
import Visibility from "./usefulStuff/Visibility";
import Input from "./usefulStuff/Input";

export default {
  name: "app",
  components: {
    OnOff,
    Counter,
    Minus,
    Options,
    Visibility,
    Input,
  },
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style></style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped></style>
