let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// console.log("Boas vindas, " + info.personagem);

info["recorrente"] = "Sim";

// console.log(info);

// for (let key in info) {
//   console.log(key);
// }

// for (let key in info) {
//   console.log(info[key]);
// }

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (key in (info, info2)) {
  if (info[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos Recorrentes");
  } else {
    console.log(info[key] + " e " + info2[key]);
  }
}
