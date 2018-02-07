var recipes = {};

function updateObjectWithKeyAndValue(recipes, prop, value) {
  return Object.assign({} recipes, {[prop]: value})
}
