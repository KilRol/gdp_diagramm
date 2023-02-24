const sum = require("../services/sum");

test("Сложить 1 и 2", () => {
  expect(sum(1, 2)).toBe(3);
});
