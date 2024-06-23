function createFormTemplate(data) {
  if (Array.isArray(data)) {
    return data.map(createFormTemplate)
  }
  else if (data !== null && typeof data === 'object') {
    for (const key in data) {
      if (key === 'id') {
        delete data[key]
      } else {
        data[key] = createFormTemplate(data[key])
      }
    }
  }
  return data;
}

module.exports = createFormTemplate;