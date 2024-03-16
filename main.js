window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let links = document.querySelectorAll('.Header-a');
    let firstChangeColorPosition = window.innerHeight;
    let secondChangeColorPosition = 2 * window.innerHeight;
    let thirdChangeColorPosition = 3 * window.innerHeight;
    let fourthChangeColorPosition = 4 * window.innerHeight;

    if (scrollPosition >= firstChangeColorPosition && scrollPosition < secondChangeColorPosition) {
        links.forEach(function(link) {
            link.style.color = '#f79b33';
        });
    } else if (scrollPosition >= secondChangeColorPosition && scrollPosition < thirdChangeColorPosition) {
        links.forEach(function(link) {
            link.style.color = '#fff';
        });
    } else if (scrollPosition >= thirdChangeColorPosition && scrollPosition < fourthChangeColorPosition) {
        links.forEach(function(link) {
            link.style.color = '#f79b33';
        });
    } else {
        links.forEach(function(link) {
            link.style.color = '#fff';
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const btns = document.querySelectorAll('.Btn-app, .Section-btn');
    const section = document.querySelector('#Section-two');
    const ancho = '70vw';
    const alto = '70vh';

    const imagenes = ['./imgs/apptal.jpeg', './imgs/entes.jpeg', './imgs/contemos.jpeg'];

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const cuadrado = document.createElement('div');
            cuadrado.className = 'miCuadrado';
            cuadrado.style.width = ancho;
            cuadrado.style.height = alto;
            cuadrado.style.position = 'absolute';
            cuadrado.style.top = '50%';
            cuadrado.style.left = '50%';
            cuadrado.style.transform = 'translate(-50%, -50%) scale(0)';
            cuadrado.style.zIndex = 1000;
            cuadrado.style.backgroundColor = '#f79b33';
            cuadrado.style.transition = 'transform 0.3s ease-out';

            const imagenDiv = document.createElement('div');
            imagenDiv.className = 'miImagen';
            imagenDiv.style.width = '80%';
            imagenDiv.style.height = '80%';
            imagenDiv.style.position = 'absolute';
            imagenDiv.style.top = '50%';
            imagenDiv.style.left = '50%';
            imagenDiv.style.transform = 'translate(-50%, -50%)';

            const imagen = document.createElement('img');
            imagen.className = 'miImagenImg';
            imagen.src = imagenes[index];
            imagen.style.width = '100%';
            imagen.style.height = '100%';
            imagenDiv.appendChild(imagen);

            cuadrado.appendChild(imagenDiv);
            section.appendChild(cuadrado);

            const desenfoque = document.createElement('div');
            desenfoque.style.position = 'fixed';
            desenfoque.style.top = 0;
            desenfoque.style.left = 0;
            desenfoque.style.width = '100vw';
            desenfoque.style.height = '100vh';
            desenfoque.style.backgroundColor = 'transparent';
            desenfoque.style.backdropFilter = 'blur(10px)';
            desenfoque.style.zIndex = 999;
            document.body.appendChild(desenfoque);
            
            setTimeout(() => {
                cuadrado.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 0);

            desenfoque.addEventListener('click', () => {
                cuadrado.style.transform = 'translate(-50%, -50%) scale(0)';
                setTimeout(() => {
                    document.body.removeChild(desenfoque);
                    section.removeChild(cuadrado);
                }, 300);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const btn = document.querySelector('.Header-a--mod');
    const ancho = '30vw';
    const alto = '70vh';

    btn.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';

        const cuadrado = document.createElement('div');
        cuadrado.className = 'miCuadrado';
        cuadrado.style.width = ancho;
        cuadrado.style.height = alto;
        cuadrado.style.position = 'fixed';
        cuadrado.style.top = '50%';
        cuadrado.style.left = '50%';
        cuadrado.style.transform = 'translate(-50%, -50%) scale(0)';
        cuadrado.style.zIndex = 1000;
        cuadrado.style.backgroundColor = '#f79b33';
        cuadrado.style.transition = 'transform 0.3s ease-out';

        const formDiv = document.createElement('div');
        formDiv.className = 'miFormulario';
        formDiv.style.width = '80%';
        formDiv.style.height = '80%';
        formDiv.style.position = 'absolute';
        formDiv.style.top = '50%';
        formDiv.style.left = '50%';
        formDiv.style.transform = 'translate(-50%, -50%)';

        const titulo = document.createElement('h3');
        titulo.textContent = 'Iniciar Sesión';
        formDiv.appendChild(titulo);

        const textosParrafos = ['Agregar Usuario', 'Agregar Correo'];

        for (let i = 0; i < 3; i++) {
            const parrafo = document.createElement('p');
            parrafo.textContent = textosParrafos[i];
            formDiv.appendChild(parrafo);

            if (i === 0) {
                const inputUsuario = document.createElement('input');
                inputUsuario.type = 'text';
                inputUsuario.placeholder = '@usuario';
                formDiv.appendChild(inputUsuario);
            }

            if (i === 1) {
                const inputCorreo = document.createElement('input');
                inputCorreo.type = 'email';
                inputCorreo.placeholder = 'ejemplo@ejemplo.com';
                formDiv.appendChild(inputCorreo);
            }
        }

        const boton = document.createElement('button');
        boton.textContent = 'Enviar';
        formDiv.appendChild(boton);

        const parrafoRegistro = document.createElement('p');
        parrafoRegistro.textContent = '¿No tienes una cuenta? ';

        const linkRegistro = document.createElement('span');
        linkRegistro.textContent = 'Regístrate';
        linkRegistro.className = 'link-registro';
        parrafoRegistro.appendChild(linkRegistro);

        formDiv.appendChild(parrafoRegistro);
        
        formDiv.appendChild(parrafoRegistro);

        cuadrado.appendChild(formDiv);
        document.body.appendChild(cuadrado);

        const desenfoque = document.createElement('div');
        desenfoque.style.position = 'fixed';
        desenfoque.style.top = 0;
        desenfoque.style.left = 0;
        desenfoque.style.width = '100vw';
        desenfoque.style.height = '100vh';
        desenfoque.style.backgroundColor = 'transparent';
        desenfoque.style.backdropFilter = 'blur(10px)';
        desenfoque.style.zIndex = 999;
        document.body.appendChild(desenfoque);
        
        setTimeout(() => {
            cuadrado.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 0);

        desenfoque.addEventListener('click', () => {
            cuadrado.style.transform = 'translate(-50%, -50%) scale(0)';
            setTimeout(() => {
                document.body.removeChild(desenfoque);
                document.body.removeChild(cuadrado);
                document.body.style.overflow = 'auto';
            }, 300);
        });
    });
});




