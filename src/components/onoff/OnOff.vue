<template>
	<div>
		<button @click="handleClick">{{ isOn ? "On" : "Off" }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOn: true
		};
	},
	methods: {
		handleClick() {
			this.isOn = !this.isOn;
		}
	}
};
</script>

<style></style>
