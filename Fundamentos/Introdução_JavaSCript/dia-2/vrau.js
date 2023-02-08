let vrau = [1, 2, 3];
let vrauV = [1, 5, 2];

for (let index = 0; index < vrau.length; index += 1) {
  for (let i = 0; i < vrauV.length; i += 1) {
    if (vrau[index] === vrauV[i]) console.log(vrauV[i]);
  }
}
