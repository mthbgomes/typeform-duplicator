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