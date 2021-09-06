window.addEventListener('load', init, false);
        function ocultarAparecer() {
            let div = document.querySelector('respuesta');
            div.style.visibility = 'visible';
            let boton = document.querySelector('respuesta');
            boton.addEventListener('click', function (e) {
                if(div.style.visibility === 'visible'){
                    div.style.visibility = 'hidden';
                }else{
                    div.style.visibility = 'visible';
                }
            }, false);
        }
        