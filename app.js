const input = document.querySelector("input");
const lowerCase = document.querySelector("#lowercase");
const uperCase = document.querySelector("#upercase");
const camelCase = document.querySelector("#camelcase");
const pascalCase = document.querySelector("#pascalcase");
const snakeCase = document.querySelector("#snakecase");
const kebabCase = document.querySelector("#kebabcase");
const trim = document.querySelector("#trim");









function capitalizeFirstString(str) {
  if(!str) return str
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function toCamelCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArry = lowerCaseString.split(" ");
  const newArry = wordsArry.map((word, i) => {
    if (i === 0) return word;
    return capitalizeFirstString(word);
  });

  return newArry.join("");
}


function toPascalCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArry = lowerCaseString.split(" ");
  const newArry = wordsArry.map((word) => {
    return capitalizeFirstString(word);
  });

  return newArry.join("");
}


function toSnakeCase(str) {
  return str.replaceAll(' ', '_')
}


function toKebabCase(str) {
  return str.replaceAll(' ', '-')
}


function toTrimCase(str) {
  return str.replaceAll(' ', '')
}







function updateScreen() {
  lowerCase.innerText = input.value.trim().toLowerCase();
  uperCase.innerText = input.value.trim().toUpperCase();
  camelCase.innerText = toCamelCase(input.value.trim());
  pascalCase.innerText = toPascalCase(input.value.trim());
  snakeCase.innerText = toSnakeCase(input.value.trim());
  kebabCase.innerText = toKebabCase(input.value.trim());
  trim.innerText = toTrimCase(input.value.trim());

}
updateScreen()

input.addEventListener("input", updateScreen);