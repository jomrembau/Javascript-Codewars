function problem(x){
  
  if (typeof(x) === "string") {
    return "Error"
  } else if (typeof(x) === "number") {
    return (x*50) + 6
  }
}

problem("ja");