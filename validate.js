function validate(validationObject, data) {
  /* Implementation intructions provided during the pair programming */

  let dataArray = Object.entries(data);

  let validated = true;

  dataArray.forEach(el => {
    if (!(el[0] in validationObject) || typeof el[1] !== validationObject[el[0]]) {
      validated = false;
    }
  });

  return validated;

}

module.exports = validate;
