function validate(validationObject, data) {
  /* Implementation intructions provided during the pair programming */
  if (!validationObject || !data) {
    return false;
  }

  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const keyData = data[key];

    const ruleForKey = validationObject.find(rule => rule.fieldName === key);
    if (!ruleForKey) {
      return false;
    }

    const type = ruleForKey.fieldType;
    switch (type) {
      case "number":
        if (!Number.isInteger(keyData)) {
          return false;
        }
        break;
      case "string":
        if (typeof keyData !== 'string') {
          return false;
        }
        break;
      case "array":
        if (!Array.isArray(keyData)) {
          return false;
        }
        break;
      default:
        return false;
    }
  }
  return true;
}

module.exports = validate;
