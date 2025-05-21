const alertas = {
  "São Paulo": [
    {
      event: "Alerta de chuva forte",
      start: 1684650000,
      end: 1684660000,
      description: "Possibilidade de chuva forte e ventos na região."
    }
  ],
  "Rio de Janeiro": []
};

const noticias = {
  "São Paulo": [
    {
      titulo: "Alagamento em São Paulo causa transtornos",
      link: "https://noticias.exemplo.com/alagamento-sp",
      data: "2025-05-20"
    }
  ],
  "Rio de Janeiro": []
};

module.exports = {
  alertas: {
    "São Paulo": [
      {
        event: "Alagamento severo",
        start: 1716300000,
        end: 1716321600,
        description: "Chuvas intensas em toda a região metropolitana."
      }
    ]
  },
  noticias: {
    "São Paulo": [
      {
        titulo: "Alagamento causa transtornos em SP",
        link: "https://exemplo.com/noticia1",
        data: "21/05/2025"
      }
    ]
  }
};
