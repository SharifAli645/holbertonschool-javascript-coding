/* eslint-disable */
function countStudents(path) {
  const fs = require("fs");
  let data = "";

  try {
    data = fs.readFileSync(path, "utf8");
  } catch (err) {
    throw new Error("Cannot load the database");
  }
  const lines = data.split("\n");
  const lista = [];
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  nonEmptyLines.splice(0, 1);

  const mapeo = nonEmptyLines.map((ele) => ele.split(","));
  const len = mapeo.length;
  console.log(`Number of students: ${len}`);

  for (const ele of mapeo) {
    if (lista.includes(ele[3])) {
      continue;
    } else lista.push(ele[3]);
  }
  for (const ele of lista) {
    const personaje = mapeo.filter((name) => name[3] === ele);
    const cadena = personaje.map((per) => ` ${per[0]}`);

    console.log(
      `Number of students in ${ele}: ${personaje.length}. List:${cadena}`
    );
  }
}
module.exports = countStudents;
