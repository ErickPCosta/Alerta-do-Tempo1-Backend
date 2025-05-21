const express = require('express');
const cors = require('cors');
const { alertas, noticias } = require('./dados');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API do Alerta do Tempo funcionando!');
});

app.get('/api/alertas', (req, res) => {
  const cidade = req.query.cidade;
  if (!cidade) return res.status(400).json({ error: 'Parâmetro cidade é obrigatório' });

  const data = alertas[cidade] || [];
  res.json({ alertas: data });
});

app.get('/api/noticias', (req, res) => {
  const cidade = req.query.cidade;
  if (!cidade) return res.status(400).json({ error: 'Parâmetro cidade é obrigatório' });

  const data = noticias[cidade] || [];
  res.json({ noticias: data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
