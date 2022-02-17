const resistors: {[name: string]: number}  = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}


export function decodedValue(string:string[]):number {
  const first_two: string[] = string.slice(0, 2)
  const first_val:string = Math.abs(resistors[first_two[0]]).toString()
  const second_val:string = Math.abs(resistors[first_two[1]]).toString()
  const total:string = first_val + second_val
  console.log(total)
  return parseInt(total)
}
