import { shallowMount } from "@vue/test-utils";
import Visibility from "./Visibility.vue";

// to check if a element is there on rendered we need to check display and visibility property on that element

// v-show: simply applies display: none
// v-if: removes element from dom entirely.

// // testing v-show
//expect(wrapper.find('button').hasStyle('display', 'none')).toBe(true)

// testing v-if
// expect(wrapper.find('button').exists()).toBe(false)

it("should be visibile when rendered", () => {
	const wrapper = shallowMount(Visibility);
	const element = wrapper.find(".maybeVisible");

	//testing v-if aka if element has been removed entierly
	let elementExists = element.exists();
	expect(elementExists).toBe(true);

	// testing v-show aka if elelemnt has display none
	let elementVisible = element.element.style.display !== "none";
	expect(elementVisible).toBe(true);
});

it("should be invisible when button is clicked", async () => {
	const wrapper = shallowMount(Visibility);
	const button = wrapper.find("button");
	await button.trigger("click");

	let maybeWrapper = wrapper.find(".maybeVisible");
	let elementExists = maybeWrapper.exists();

	if (elementExists) {
		let elementVisible = maybeWrapper.element.style.display !== "none";
		expect(elementVisible).toBe(false);
	}
});
