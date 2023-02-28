import { Component } from "react";

class VascoDaGama extends Component {
  render() {
    const description = 'Papaizinho, SWE3000 e emo'
    const Nome = 'Leandro Henrique';
    return <>
      <h1> {Nome} </h1>
      <h2> Minhas Habilidades </h2>
      <p> {description}</p>
      <ul>
        <li>Endormofo</li>
        <li>Vascaino</li>
        <li>TyGus</li>
      </ul>
    </>
  }
}

export default VascoDaGama;