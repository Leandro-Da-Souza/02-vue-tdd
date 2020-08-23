import { shallowMount } from "@vue/test-utils";
import Counter from "./Counter.vue";

it("should show the value of one on button", () => {
	const wrapper = shallowMount(Counter);
	const expected = "1";

	const button = wrapper.find("button");
	let content = button.text();

	expect(content).toBe(expected);
});

it("should increase the value of button when triggered to 2", async () => {
	const wrapper = shallowMount(Counter);
	const expected = "2";

	const button = wrapper.find("button");
	await button.trigger("click");
	let content = button.text();

	expect(content).toBe(expected);
});

it("should increase the value of button by one for each trigger", async () => {
	const wrapper = shallowMount(Counter);
	const expected = "3";

	const button = wrapper.find("button");
	await button.trigger("click");
	await button.trigger("click");
	let content = button.text();

	expect(content).toBe(expected);
});
