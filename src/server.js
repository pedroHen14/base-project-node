const app = require('./index.js');

const PORT = 3334;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});