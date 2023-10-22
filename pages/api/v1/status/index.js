import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("select 1 + 1 AS SUM");
  console.log(result.rows);
  response.status(200).json({ chave: "testando UTF-8 é ã" });
}

export default status;
