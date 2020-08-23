<template>
	<div>
		<button @click="handleCount">{{ counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 1
		};
	},
	methods: {
		handleCount() {
			this.counter = this.counter += 1;
		}
	}
};
</script>

<style></style>
