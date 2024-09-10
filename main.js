let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById('nav').classList = '';
        menuVisible = false;
    } else {
        document.getElementById('nav').classList = 'responsive'
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que se seleccione una opcion
    document.getElementById('nav').classList =''
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById('skills');
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('javascript')
        habilidades[1].classList.add('react')
        habilidades[2].classList.add('html')
        habilidades[3].classList.add('css')
        habilidades[4].classList.add('laravel')
        habilidades[5].classList.add('python')
        habilidades[6].classList.add('comunicacion')
        habilidades[7].classList.add('trabajo')
        habilidades[8].classList.add('resolucion')
        habilidades[9].classList.add('gestion')
        habilidades[10].classList.add('adaptabilidad')
        habilidades[11].classList.add('cordialidad')
        habilidades[12].classList.add('servicial')
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

//Envio correo del Formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Crea un objeto FormData a partir del formulario
    const formData = new FormData(this);

    // Usa fetch para enviar los datos al servidor
    fetch('https://formsubmit.co/david_es-zu@hotmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').innerText = 'Mensaje enviado correctamente.';
            document.getElementById('contactForm').reset(); // Opcional: Limpiar el formulario después del envío
        } else {
            throw new Error('Error al enviar el mensaje.');
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = error.message;
    });
});

//Descarga de CV
document.getElementById('downloadCV').addEventListener('click', function() {
    // Reemplaza la ruta con la URL de tu archivo PDF
    const pdfUrl = 'https://docs.google.com/document/d/1JdVj7ME6Ip81CE2iAxCfvnsTThgBO2L5/edit';
    
    // Crear un elemento <a> para manejar la descarga
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'hoja_de_vida'; // Nombre del archivo a descargar
    document.body.appendChild(link); // Agregar el enlace al DOM
    link.click(); // Hacer clic en el enlace
    document.body.removeChild(link); // Eliminar el enlace del DOM
});

