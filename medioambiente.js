// 1. IF – Calidad del aire (AQI)
function ej1() {
    let aqi = parseInt(prompt("Ingresar AQI:"));
    let calidad;
  
    if (aqi <= 50) calidad = "Bueno";
    else if (aqi <= 100) calidad = "Moderado";
    else if (aqi <= 150) calidad = "Dañino para grupos sensibles";
    else if (aqi <= 200) calidad = "Dañino";
    else if (aqi <= 300) calidad = "Muy dañino";
    else calidad = "Peligroso";
  
    alert("Calidad del aire: " + calidad);
  }
  
  // 2. FOR – Promedio de ruido
  function ej2() {
    let n = parseInt(prompt("Número de mediciones:"));
    let suma = 0;
  
    for (let i = 1; i <= n; i++) {
      let db = parseFloat(prompt("Medición " + i + " (dB):"));
      suma += db;
    }
  
    alert("Promedio de ruido: " + (suma / n).toFixed(2) + " dB");
  }
  
  // 3. WHILE – Focos de calor
  function ej3() {
    let temp = parseFloat(prompt("Temperatura (0 para salir):"));
    let focos = 0;
  
    while (temp !== 0) {
      if (temp > 45) focos++;
      temp = parseFloat(prompt("Temperatura (0 para salir):"));
    }
  
    alert("Focos detectados: " + focos);
  }
  
  // 4. SWITCH – Clasificación de residuo
  function ej4() {
    let cod = parseInt(prompt("Código (1-4):"));
    let tipo;
  
    switch (cod) {
      case 1: tipo = "Orgánico"; break;
      case 2: tipo = "Plástico"; break;
      case 3: tipo = "Papel/Cartón"; break;
      case 4: tipo = "Vidrio"; break;
      default: tipo = "Código inválido";
    }
  
    alert("Residuo: " + tipo);
  }
  
  // 5. DO WHILE – Nivel del río
  function ej5() {
    let nivel;
    let seguir;
  
    do {
      nivel = parseFloat(prompt("Nivel del río (m):"));
  
      if (nivel > 3) alert("⚠️ NIVEL ALTO: " + nivel + " m");
      else alert("Nivel normal: " + nivel + " m");
  
      seguir = prompt("¿Registrar otro nivel? (si/no)").toLowerCase();
    } while (seguir === "si");
  }
  