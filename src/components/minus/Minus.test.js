import { shallowMount } from "@vue/test-utils";
import Minus from "./Minus";

it("should show the value of 5 on button", () => {
	const wrapper = shallowMount(Minus);
	const expected = "5";
	const button = wrapper.find("button");
	const content = button.text();

	expect(content).toBe(expected);
});

it("should show the value of 4 on button when clicked", async () => {
	const wrapper = shallowMount(Minus);
	const expected = "4";

	const button = wrapper.find("button");
	await button.trigger("click");
	const content = button.text();

	expect(content).toBe(expected);
});

it("should decrease the value on button by 1 when clicked", async () => {
	const wrapper = shallowMount(Minus);
	const expected = "3";

	const button = wrapper.find("button");
	await button.trigger("click");
	await button.trigger("click");
	const content = button.text();

	expect(content).toBe(expected);
});
