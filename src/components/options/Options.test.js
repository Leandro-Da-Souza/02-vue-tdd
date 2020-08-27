import { shallowMount } from "@vue/test-utils";
import Options from "./Options";

it("should have 5 options", () => {
	const wrapper = shallowMount(Options);
	const elements = wrapper.findAll("option");
	const expected = 5;

	expect(elements.length).toBe(expected);
});

it("should have option A selected at mount", () => {
	const wrapper = shallowMount(Options);
	const element = wrapper.find("select").element;
	const expected = "A";

	let value = element.value;

	expect(value).toBe(expected);
});

it("should have option B selected when changed", async () => {
	const wrapper = shallowMount(Options);
	const options = wrapper.findAll("option");
	const expected = "B";

	await options.at(1).setSelected();
	let value = wrapper.find("select").element.value;

	expect(value).toBe(expected);
});

it("select should have value of selected option", async () => {
	const wrapper = shallowMount(Options);
	const options = wrapper.findAll("option");
	const expected = "E";

	await options.at(4).setSelected();
	let value = wrapper.find("select").element.value;

	expect(value).toBe(expected);
});

test("data model should have the same value as selected", async () => {
	const wrapper = shallowMount(Options);
	const options = wrapper.findAll("option");
	const expected = "E";

	await options.at(4).setSelected();
	let dataValue = wrapper.vm.selected;

	expect(dataValue).toBe(expected);
});
