import { shallowMount } from "@vue/test-utils";
import OnOff from "./OnOff.vue";

it('should display "On" when rendered', () => {
	const wrapper = shallowMount(OnOff);
	const expected = "On";

	let button = wrapper.find("button");
	let content = button.text();

	expect(content).toBe(expected);
});
it('should display "Off" when clicked', async () => {
	const wrapper = shallowMount(OnOff);
	const expected = "Off";

	let button = wrapper.find("button");
	await button.trigger("click");

	let content = button.text();

	expect(content).toBe(expected);
});
it('should display "On" when clicked on "off"', async () => {
	const wrapper = shallowMount(OnOff);
	const expected = "On";

	let button = wrapper.find("button");
	await button.trigger("click");
	await button.trigger("click");

	let content = button.text();

	expect(content).toBe(expected);
});
