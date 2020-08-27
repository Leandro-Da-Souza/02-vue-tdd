import { shallowMount } from "@vue/test-utils";
import Input from "./Input";

test("should not display message when rendered", () => {
	const wrapper = shallowMount(Input);
	const content = wrapper.find("p").text();

	expect(content).toBe("");
});

test("should display message on letter", async () => {
	const wrapper = shallowMount(Input);
	const inputEl = wrapper.find("input");

	await inputEl.setValue("Hej");
	const content = wrapper.find(".message").text();
	expect(content).toBe("Hej");
});

test("should display message on number", async () => {
	const wrapper = shallowMount(Input);
	const inputEl = wrapper.find("input");

	await inputEl.setValue(2);
	const content = Number(wrapper.find(".message").text());
	expect(content).toBe(2);
});

test("should display the key or number currently pressed", async () => {
	const wrapper = shallowMount(Input);
	const inputEl = wrapper.find("input");

	await inputEl.trigger("keyup", {
		key: "L"
	});

	const content = wrapper.find(".key").text();

	expect(content).toBe("L");
});

test("should not display message on Shift", async () => {
	const wrapper = shallowMount(Input);
	const inputEl = wrapper.find("input");

	await inputEl.trigger("keyup.Shift");

	const content = wrapper.find(".key").text();

	expect(content).toBe("");
});
