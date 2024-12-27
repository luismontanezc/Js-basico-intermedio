function recomendar (genero) {
  let edad = document.getElementById("edad").value;
  let recomendacion = document.getElementById("recomendacion");

  switch(genero) {
    case "drama":
      if (edad < 13){
        recomendacion.textContent = "Casablanca";
      }else {
        if (edad < 16){
          recomendacion.textContent = "The shawshank";
        }else {
          recomendacion.textContent = "Taxi Driver";
        }
      }
      break;
      case "comedia":
      if (edad < 13){
        recomendacion.textContent = "Back to the future";
      }else {
        if (edad < 16){
          recomendacion.textContent = "The truman show";
        }else {
          recomendacion.textContent = "The wolf of wall Street";
        }
      }
      break;
      case "musical":
      if (edad < 13){
        recomendacion.textContent = "La la land";
      }else {
        if (edad < 16){
          recomendacion.textContent = "Los miserables";
        }else {
          recomendacion.textContent = "The Rocky";
        }
      }
      break;
      case "crimen":
      if (edad < 13){
        recomendacion.textContent = "No hay opciones para esta edad";
      }else {
        if (edad < 16){
          recomendacion.textContent = "El secreto de tus ojos";
        }else {
          recomendacion.textContent = "El padrino";
        }
      }
      break;
  }
}