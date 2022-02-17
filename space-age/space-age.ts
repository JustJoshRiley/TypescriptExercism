function age_on_earth(seconds:number):number {
  const num:number = (seconds/60/60/24/365.25)*100
  const floor_num:number = Math.ceil(num)
  return (floor_num / 100)
}

function age_on_mercury(seconds:number):number {
  const num:number = (seconds/60/60/24/87.97)*100
  const floor_num:number = Math.ceil(num)
  return (floor_num / 100)
}

function age_on_venus(seconds:number):number {
  const num:number = (seconds/60/60/24/224.7)*100
  const floor_num:number = Math.ceil(num)
  return (floor_num / 100)
}

function age_on_mars(seconds:number):number {
  const num:number = (seconds/60/60/24/687.0481462771)*100
  const floor_num:number = Math.floor(num)
  return (floor_num / 100)
}

function age_on_jupiter(seconds:number):number {
  const num:number = (seconds/60/60/24/4332.59)*100
  const floor_num:number = Math.ceil(num)
  return (floor_num / 100)
}

function age_on_saturn(seconds:number):number {
  const num:number = (seconds/60/60/24/10759.22)*100
  const floor_num:number = Math.floor(num)
  return (floor_num / 100)
}

function age_on_uranus(seconds:number):number {
  const num:number = (seconds/60/60/24/30688.5)*100
  const floor_num:number = Math.ceil(num)
  return (floor_num / 100)
}

function age_on_neptune(seconds:number):number {
  const num:number = (seconds/60/60/24/60195)*100
  const floor_num:number = Math.floor(num)
  return (floor_num / 100)
}

export function age(planet:string, seconds:number):number {
  if (planet === 'earth') {
    return age_on_earth(seconds)
  } else if (planet === 'mercury') {
    return age_on_mercury(seconds)
  } else if (planet === 'venus') {
    return age_on_venus(seconds)
  } else if (planet === 'mars') {
    return age_on_mars(seconds)
    
  } else if (planet === 'jupiter') {
    return age_on_jupiter(seconds)
    
  } else if (planet === 'saturn') {
    return age_on_saturn(seconds)
    
  } else if (planet === 'uranus') {
    return age_on_uranus(seconds)
    
  } else if (planet === 'neptune') {
    return age_on_neptune(seconds)
    
  } else {
    return 0
  }
}
