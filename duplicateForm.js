require('dotenv').config();
const axios = require('axios');
const getSourceFormData = require('./getSourceFormData');
const createFormTemplate = require('./createFormTemplate');

async function duplicateForm() {
  const formId = 'flpHU7hr';
  const formTitle = 'Formulário Teste 123'
  try {
    const sourceFormData = await getSourceFormData(formId);
    const formTemplate = createFormTemplate(sourceFormData);
    formTemplate.title = formTitle
    const postUrl = 'https://api.typeform.com/forms'
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.TYPEFORM_API_KEY}`,
        'Accept': 'application/json'
      },
      data: JSON.stringify(formTemplate)
    };
    const response = await axios(postUrl, options)
    const newFormId = response.data.id;
    console.log('Novo formulário criado com ID: ', newFormId)

  } catch (error) {
    console.log(error)
  }
}

duplicateForm();