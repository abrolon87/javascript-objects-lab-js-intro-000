var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign ({}, recipes, { [key]: value })

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}
//passed
function deleteFromObjectByKey(recipes, newObj) {
  return Object.assign ({}, recipes, newObj)
  


}

function destructivelyDeleteFromObjectByKey() {
  delete recipes.key;
  return recipes;
}
