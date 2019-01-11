export function convertEnumToArray (protoEnum, isNumber = true) {
  if (Array.isArray(protoEnum)) {
    return protoEnum
  }
  const result = Object.keys(protoEnum).map(value => ({ text: protoEnum[value], value: convertValue(value, isNumber) }))
  result.sort((a, b) => a.value - b.value)
  return result
}

function convertValue (value, isNumber) {
  return isNumber ? (+value) : value
}
