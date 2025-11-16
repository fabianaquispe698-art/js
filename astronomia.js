// 1. IF – Brillo estelar
function astro1() {
  let mag = parseFloat(prompt("Ingresar magnitud aparente:"));
  let brillo;

  if (mag <= 0) brillo = "Extremadamente brillante";
  else if (mag <= 2) brillo = "Muy brillante";
  else if (mag <= 4) brillo = "Brillante";
  else if (mag <= 6) brillo = "Débil";
  else brillo = "No visible a simple vista";

  alert("Clasificación: " + brillo);
}

// 2. FOR – Promedio de distancias planetas
function astro2() {
  let n = parseInt(prompt("¿Cuántas distancias registrar?"));
  let suma = 0;

  for (let i = 1; i <= n; i++) {
    let dist = parseFloat(prompt("Distancia " + i + " (millones km):"));
    suma += dist;
  }

  alert("Promedio: " + (suma / n).toFixed(2) + " millones de km");
}

// 3. WHILE – Cráteres lunares >50 km
function astro3() {
  let diam = parseFloat(prompt("Diámetro del cráter (0 para salir):"));
  let contador = 0;

  while (diam !== 0) {
    if (diam > 50) contador++;
    diam = parseFloat(prompt("Diámetro del cráter (0 para salir):"));
  }

  alert("Cráteres mayores a 50 km: " + contador);
}

// 4. SWITCH – Cuerpo celeste
function astro4() {
  let cod = parseInt(prompt("Código 1-5:"));
  let cuerpo;

  switch (cod) {
    case 1: cuerpo = "Estrella"; break;
    case 2: cuerpo = "Planeta"; break;
    case 3: cuerpo = "Cometa"; break;
    case 4: cuerpo = "Asteroide"; break;
    case 5: cuerpo = "Galaxia"; break;
    default: cuerpo = "Código inválido";
  }

  alert("Cuerpo celeste: " + cuerpo);
}

// 5. DO WHILE – Nivel de luz
function astro5() {
  let lux;
  let seguir;

  do {
    lux = parseFloat(prompt("Nivel de luz (lux):"));

    if (lux < 5) alert("🌙 Noche profunda (" + lux + " lux)");
    else alert("Nivel registrado: " + lux + " lux");

    seguir = prompt("¿Registrar otro nivel? (si/no)").toLowerCase();
  } while (seguir === "si");
}
