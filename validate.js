
function validate(validationObject, data) {
  let flag = false;
  if (validationObject?.fieldName) {
    if (validationObject?.callback) {
      flag = true;
    }
  }

  if (
    data?.someNumber === "number" &&
    Array.isArray(data?.someArray) &&
    data?.someString === "string"
  ) {
    return true;
  }
  return flag;
}

module.exports = validate;
