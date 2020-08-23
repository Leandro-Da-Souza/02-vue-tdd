<template>
	<div>
		<button @click="handleClick">{{ count }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 5
		};
	},
	methods: {
		handleClick() {
			this.count = this.count -= 1;
		}
	}
};
</script>

<style></style>
