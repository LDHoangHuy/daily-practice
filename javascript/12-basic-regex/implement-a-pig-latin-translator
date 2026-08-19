function translatePigLatin(str) {
  const regex = /^[^aeiou]+/i;
  const regMatch = str.match(regex) ?? [""];
  const tail = regMatch[0] === "" ? "way" : "ay";

  return str.slice(regMatch[0].length) + regMatch[0] + tail;
}

console.log(translatePigLatin("algorithm"));
