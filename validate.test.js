const validate = require("./validate");

describe("validate", () => {
  test("returns false for incorrect validation object", () => {
    expect(validate(null)).toBe(false);
  });

  test("returns true for empty validation object", () => {
    expect(validate([], {})).toBe(true);
  });

  test("returns true for correct validation object of type string", () => {
    expect(
      validate(
        [
          {
            fieldName: "someNumber",
            fieldType: "number",
          },
          {
            fieldName: "someString",
            fieldType: "string",
          },
          {
            fieldName: "someArray",
            fieldType: "array",
          },
        ],
        {
          someNumber: 1,
          someArray: ["test1", "test2"],
          someString: "validateMe",
        }
      )
    ).toBe(true);
  });
});
