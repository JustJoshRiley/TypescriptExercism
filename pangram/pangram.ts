function getAlpha():{[string:string]: number} {
  const alpha:{[string:string]: number} = {
    "a": 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0
  }
  return alpha
}




export function isPangram(string:string): boolean {
  const alpha:{[string:string]: number} = getAlpha()

  const split_string:string[] = string.toLowerCase().split("")
  console.log(split_string)
  for (let i = 0; i < split_string.length; i += 1) {
    if (alpha[split_string[i]] !== null) {
      alpha[split_string[i]] = 1
    }
  }

  const values:number[] = Object.values(alpha)
  for (let j = 0; j < values.length; j += 1) {
    if (values[j] === 0) {
      return false
    }
  }
  return true
  
}
