function setData(model, value) {
  window.localStorage.setItem(model, JSON.stringify(value));
}

function getData(model) {
  return JSON.parse(window.localStorage.getItem(model));
}

export { setData, getData }
