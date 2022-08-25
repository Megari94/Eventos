 //alert("Bienvenido a Clinica Santa Ana");
 class Horarios {
     constructor(dia, nombre, especialidad, prepaga, img) {
         this.dia = dia;
         this.nombre = nombre;
         this.especialidad = especialidad;
         this.prepaga = prepaga;
         this.img = img;
     }

 }
 class Paciente {
     constructor(Nombre, Apellido, Dia, Orden, telefono, doctor) {
         this.Nombre = Nombre;
         this.Apellido = Apellido;
         this.Dia = Dia;
         this.Orden = Orden;
         this.telefono = telefono;
         this.doctor = doctor;

     }


 }


 //TABLA DE DOCTORES

 let lunes = new Horarios("Lunes", "Dr. Lautaro Gimenez", "Clinico", "Prepaga: SI", "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000");
 let martes = new Horarios("Martes", "Lic. Agustín Palacios", "Nutricionista", "Prepaga: NO", "https://bosworthinstitute.com/wp-content/uploads/2020/07/Nutricionista-bosworth-carrera.png");
 let martes2 = new Horarios("Martes", "Lic. Maria Cordoba", "Nutricionista", "Prepaga: NO", "https://nutricionistahuelva.es/ficheros/servicios/psiconutricion_C_4.jpg");
 let mier = new Horarios("Miercoles", "Dra. Rocio Matozo", "Pediatra", "Prepaga: SI", "https://ximenamargain.com/wp-content/uploads/2021/07/DOCTORA-XIMENA-LINKS-PEDIATRA.jpg");
 let vier = new Horarios("Viernes", "Dr. Gregorio Muñoz", "Cardiologia", "Prepaga: NO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8a-31MUy64qk80BIpp8cpv8q273vQFMIkXBdWmnNU96bXD1fKfG5vYW82Nf-kRMq1VM&usqp=CAU");

 const dr = [];

 dr.push(lunes);
 dr.push(martes);
 dr.push(martes2);
 dr.push(mier);
 dr.push(vier);


 const cards = document.querySelector("#card-doctores"); // a traves de ForEach iteramos:

 dr.forEach(tarjetaDr => {
     cards.innerHTML += `
    <div class="card" style="width: 13rem;" align="center">
        <h3 class="title" align="center">${tarjetaDr.nombre}</h3>
        <img class="card-img-top" style= "height: 7rem;" src=${tarjetaDr.img}>
        <div class="card-body">            
          
          
          <p class="card-text">${tarjetaDr.especialidad}</p>
          <p class="card-text">${tarjetaDr.prepaga}</p>
         
        </div>
    `
 })


 //TABLA DE TURNOS 


 formRegistro.addEventListener("submit", (e) => {
     e.preventDefault()
     let Nombre = document.getElementById("nombres").value;
     let Apellido = document.getElementById("apellidos").value;
     let Dia = document.getElementById("dia").value;
     let Orden = document.getElementById("orden").value;
     let telefono = document.getElementById("telefono").value;
     let doctor = document.getElementById("doctor").value;
     const formulario = new Paciente(Nombre, Apellido, Dia, Orden, telefono, doctor)
     const formularios = [];
     formularios.push(formulario)
     formRegistro.reset()
     const respuesta = document.getElementById("respuesta");
     respuesta.textContent = `Hola ${Nombre}, te esperamos el día ${Dia} a las ${Orden} en tu cita con ${doctor}`
 })


 //DOCTOR DISPONIBLE EN CLINICA 

 let drDispo = dr.find(Horarios => Horarios.especialidad == "Clinico");

 console.log(`Por vacaciones estaremos contando con un solo Medico Clinico: ${drDispo.nombre}`);


 //PERSONAL QUE TRABAJE CON OBRA SOCIAL

 let prep = dr.filter(Horarios => Horarios.prepaga == "SI");
 //


 console.log(`Personal que trabaja con Obra Social`);
 console.table(prep);