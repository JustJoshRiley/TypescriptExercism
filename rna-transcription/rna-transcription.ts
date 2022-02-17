export function toRna(string:string):string {
  const separated_string:string[] = string.split("")
  let new_string = ""
  for (let i = 0; i < separated_string.length; i += 1) {
    if (separated_string[i] === 'C') {
      new_string += 'G'
    } else if (separated_string[i] === 'G') {
      new_string += 'C'
    } else if (separated_string[i] === 'A') {
      new_string += 'U'
    } else if (separated_string[i] === 'T') {
      new_string += 'A'
    } else {
      throw 'Invalid input DNA.';
    }
  }
  return new_string
}
