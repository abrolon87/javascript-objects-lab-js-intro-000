var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign ({}, recipes, { [key]: value })

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}
//passed
function deleteFromObjectByKey(recipes, key) {
  var recipes = { key: 'value' }
  var newObj = Object.assign({}, recipes)

  delete newObj.key
  return recipes;
}

function destructivelyDeleteFromObjectByKey() {
  delete recipes.key;
  return recipes;
}

/*var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar

    expect(newObj['prop']).toBe(undefined)
  })

  it('does not modify the original object (it is non-destructive)', function() {
    var obj = { prop: 1 }

    deleteFromObjectByKey(obj, 'prop')
    expect(obj['prop']).toBe(1)
  })
})
*/
