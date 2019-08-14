var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign ({ prop: 1, prop2: 2 }, recipes)
  return recipes;

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey() {

}
