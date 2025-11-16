function salud1() {
  let sist = parseInt(prompt("Presión sistólica:"));
  let diast = parseInt(prompt("Presión diastólica:"));

  let clas = (sist < 120 && diast < 80) ? "Normal" :
             (sist >= 120 && sist <= 129 && diast < 80) ? "Elevada" :
             ((sist >= 130 && sist <= 139) || (diast >= 80 && diast <= 89)) ? "Hipertensión Grado 1" :
             (sist >= 140 || diast >= 90) ? "Hipertensión Grado 2" :
             "Valores no definidos";

  alert("Clasificación: " + clas);
}

function salud2() {
  let suma = 0;
  let n = parseInt(prompt("Número de pacientes:"));

  for (let i = 1; i <= n; i++) {
    suma += parseFloat(prompt("Temperatura del paciente " + i + ":"));
  }

  alert("Promedio de temperatura: " + (suma / n).toFixed(2));
}

function salud3() {
  let fiebre = 0;
  for (let temp = parseFloat(prompt("Temperatura (0 para salir):")); temp !== 0; temp = parseFloat(prompt("Temperatura (0 para salir):"))) {
    if (temp >= 38) fiebre++;
  }
  alert("Pacientes con fiebre: " + fiebre);
}

function salud4() {
  let cat = {
    1: "Rojo (emergencia crítica)",
    2: "Amarillo (urgente)",
    3: "Verde (no urgente)",
    4: "Azul (mínima prioridad)"
  }[parseInt(prompt("Código TRIAGE (1-4):"))] || "Código inválido";

  alert("Clasificación TRIAGE: " + cat);
}

function salud5() {
  let seguir;
  do {
    alert("Saturación registrada: " + parseFloat(prompt("Saturación SpO₂ (%):")) + "%");
    seguir = prompt("¿Registrar otra medición? (si/no)").toLowerCase();
  } while (seguir === "si");
}
