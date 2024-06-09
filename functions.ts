function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}
function signUpUser(name: string, email: string, password: string) {
  return `${name} has ${email} as email and ${password} as a password`;
}
addTwo(5);
getUpper("djibuji");
signUpUser("baptizo", "kibwa", "kalisa");

export {};
