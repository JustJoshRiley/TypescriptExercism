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


export function decodedValue(string:string[]):string {
  const first_two: string[] = string.slice(0, 2)
  const first_val:string = Math.abs(resistors[first_two[0]]).toString()
  const second_val:string = Math.abs(resistors[first_two[1]]).toString()
  const total:string = first_val + second_val
  return total
}





export function decodedResistorValue(string:string[]): string {
  const first_two:string[] = string.splice(0, 2)
  const last:string[] = string.splice(0)
  const total:string = decodedValue(first_two)

  const ohms = ""
  
  for (let i = 0; i < parseInt(last[0]); i+=1) {
    ohms + "0"
  }

  if ( parseInt(last[0]) < 3 && ohms.length < 3) {
    return total + ohms + " ohms"
  } else if (last[0] === "black") {
    return total + " ohms"
  } else if (last[0] === "brown") {
    return total + "0" + " ohms"
  } else if (last[0] === "red") {
    return "2" + " kiloohms"
  } else if (last[0] === "orange") {
    return total + " kiloohms"
  } else if (last[0] === "yellow") {
    return total + "0" + " kiloohms"
  } else if (last[0] === "green") {
    return total + "00" + "kiloohms"
  } else if (last[0] === "blue") {
    return total + "000" + "kiloohms"
  } else if (last[0] === "violet") {
    return total + "0000" + "kiloohms"
  } else if (last[0] === "grey") {
    return total + "00000" + "kiloohms"
  } else if (last[0] === "white") {
    return total + "000000" + "kiloohms"
  } else {
    return "last color not in resistor list"
  }




  // if (ohms.length === 3) {
  //   return total + " kiloohms"
  // } else if (ohms.length > 3) {
  //   return total + ohms + " kiloohms"
  // } else {
  //   return total + ohms + " ohms"
  // }

}
