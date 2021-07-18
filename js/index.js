const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

function renderizarHtml(miembro) {
    const template = `
  <li class="tarea">
      <p><span>Miembro: </span> ${miembro.name}</p>
      <p><span>Con edad: </span>${miembro.age}</p>
      <p><span>Con identidad secreta: </span>${miembro.secretIdentity}</p>
      <p><span>Poderes: </span>${miembro.powers.join(", ")}</p>
  </li>
`;
    document.querySelector("#miembros").innerHTML += template;
}
//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {
    //escribe la lógica
    let miembros = JSON.parse(jsonData).members;
    miembros.forEach(function(miembro) {
        renderizarHtml(miembro);
    });

};
recorrerMiembros();