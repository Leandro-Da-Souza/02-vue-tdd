<template>
	<div id="app">
		<h1>Welcome to Vue.js</h1>
		<div class="bottom">
			<OnOff />
			<Counter />
			<Minus />
		</div>
	</div>
</template>

<script>
import OnOff from "./onoff/OnOff";
import Counter from "./counter/Counter";
import Minus from "./minus/Minus";

export default {
	name: "app",
	components: {
		OnOff,
		Counter,
		Minus
	}
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style></style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped></style>
