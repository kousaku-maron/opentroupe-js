import { hello } from "./index";

test("hello", async () => {
	const res = hello();
	expect(res).toBe("hello");
});
