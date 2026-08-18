function spinalCase(str) {
  const regex = /[a-z][A-Z]/g;
  const upperCaseReg = /[A-Z]/g;
  const spcundReg = /\s|_/g;
  str = str
    .replace(regex, (m) => `${m[0]}-${m[1]}`)
    .replace(upperCaseReg, (m) => m.toLowerCase())
    .replace(spcundReg, "-");
  return str;
}

console.log(spinalCase("AllThe-small Things"));
