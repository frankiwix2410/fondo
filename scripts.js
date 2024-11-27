function cambiarColor(){
     // Generar valores RGB aleatorios
     let r = Math.floor(Math.random() * 256);
     let g = Math.floor(Math.random() * 256);
     let b = Math.floor(Math.random() * 256);
     
     // Crear el string RGB
     let rgbColor = `rgb(${r}, ${g}, ${b})`;
 
     // Cambiar el color de fondo del cuerpo
     document.body.style.backgroundColor = rgbColor;
 
     // Actualizar el texto del h1 con el nuevo color RGB
     document.querySelector("h1").innerText = `${rgbColor}`;
 
}

