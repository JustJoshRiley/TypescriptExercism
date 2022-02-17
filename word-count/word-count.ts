export function count(string:string): Map<string, number> {
  let newDict:{[string:string] : number} = {}

  const split_string:string[] = string.toLowerCase().split(" ").join(", ").split('\n').join(", ").split('\t').join(', ').split(', ')
  console.log(split_string)
  for (let i = 0; i < split_string.length; i += 1) {
    console.log(newDict[split_string[i]])
    if (split_string[i])
    if (newDict[split_string[i]] === undefined || split_string[i] === 'constructor') {
      newDict[split_string[i]] = 1
    } else {
      newDict[split_string[i]] += 1
    }
  }
  // new Map(Object.entries({foo: 'bar'}))
  const mapped = new Map(Object.entries(newDict))
  console.log(newDict)
  return mapped
}
