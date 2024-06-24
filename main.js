require('dotenv').config()
const axios = require('axios')
const getSourceFormData = require('./getSourceFormData')
const createFormTemplate = require('./createFormTemplate')
const duplicateForm = require('./duplicateForm')

async function main() {
  const formId = 'flpHU7hr';
  const newformTitle = 'Formulario Teste 456';
  const data = await getSourceFormData(formId);
  const formTemplate = createFormTemplate(data);
  await duplicateForm(formTemplate, newformTitle)
}

main()