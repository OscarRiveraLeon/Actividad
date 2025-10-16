// server.js

	function agregarTabla() {
    // 1. Obtener todos los valores del formulario
    let fechita = document.getElementById("fecha").value;
    let horitaInicio = document.getElementById("timeStart").value;
    let horitaFin = document.getElementById("timeEnd").value;
    let actividadita = document.getElementById("actividad").value;
    let lugarcita = document.getElementById("lugar").value;
    let opcioncita = document.getElementById("opcion").value;
    let notitas = document.querySelector('textarea[name="notes"]').value;
    let banderita = document.getElementById("bandera").value;
    let dispoOcupadita = document.getElementById("dispoOcupad").checked;

    // 2. Seleccionar la tabla
    let miTablita = document.querySelector(".schedule-table");

    // 3. Crear una nueva fila (<tr>)
    let nuevaFila = document.createElement('tr');

    // 4. Crear y llenar cada celda (<td>)
    let celdaFecha = document.createElement('td');
    celdaFecha.textContent = fechita;
    nuevaFila.appendChild(celdaFecha);

    let celdaHoraInicio = document.createElement('td');
    celdaHoraInicio.textContent = horitaInicio;
    nuevaFila.appendChild(celdaHoraInicio);

    let celdaHoraFin = document.createElement('td');
    celdaHoraFin.textContent = horitaFin;
    nuevaFila.appendChild(celdaHoraFin);

    let celdaActividad = document.createElement('td');
    celdaActividad.textContent = actividadita;
    nuevaFila.appendChild(celdaActividad);

    let celdaLugar = document.createElement('td');
    celdaLugar.textContent = lugarcita;
    nuevaFila.appendChild(celdaLugar);

    let celdaOpcion = document.createElement('td');
    celdaOpcion.textContent = opcioncita;
    nuevaFila.appendChild(celdaOpcion);
    
    let celdaNotas = document.createElement('td');
    celdaNotas.textContent = notitas;
    nuevaFila.appendChild(celdaNotas);
    
    let celdaBandera = document.createElement('td');
    celdaBandera.textContent = banderita;
    nuevaFila.appendChild(celdaBandera);
    
    // 5. Manejo del checkbox (ocupado/libre)
    let celdaDispo = document.createElement('td');
    celdaDispo.textContent = dispoOcupadita ? "Busy" : "Free";
    nuevaFila.appendChild(celdaDispo);

    // 6. Añadir la fila a la tabla
    miTablita.appendChild(nuevaFila);
}