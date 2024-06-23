//1 get do form que deseja copiar
//2 post do body da requisição anterior removendo todos os campos IDs
//aqui já dá pra upar a imagem nova, não precisa de um edit, mas vou fazer pelo roleplay azar
//3 a resposta do post tem o id recem criado, preciso anotar isso pro proximo script
require('dotenv').config();
const axios = require('axios');

async function getSourceFormData(formId) {
  const fetchUrl = `https://api.typeform.com/forms/${formId}`;
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.TYPEFORM_API_KEY}`,
      'Accept': 'application/json'
    }
  };
  try {
    const response = await axios(fetchUrl, options);
    return response.data
  } catch (error) {
    console.log(error)
  }
}

module.exports = getSourceFormData;