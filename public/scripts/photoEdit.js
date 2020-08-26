function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    let portrayPhoto = qs('img.productEdit-form-uploadImage--portray');
    let horizontalPhoto = qs('img.productEdit-form-uploadImage--horizontal');
    let detailPhoto = qs('img.productEdit-form-uploadImage--detail');
    let imagesArray = document.querySelectorAll('.carouselcontenedor');


    let portrayInput = qs('input#portray');
    let horizontalInput = qs('input#horizontal');
    let detailInput = qs('input#detail');
    let carouselBtn = qs('form.imagenEdit-form');
    let carouselInput = document.getElementById('deleteImage');

    //appendChild

    portrayPhoto.addEventListener('click', function() {

        if (portrayPhoto.dataset.status == "active") {
            carouselInput.value = portrayPhoto.name;
            Swal.fire({
                width: '40%',
                background: 'var(--secodary-bg-color)',
                imageUrl:portrayPhoto.src,
                imageHeight: 500,
                cancelButtonText: 'Cerrar',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar!'
              }).then((result) => {
                if (result.value) {
                    
                    Swal.fire({
                        title: 'Seguro que desea borrar?',
                        width: '40%',
                        background: 'var(--secodary-bg-color)',
                        text:'No se puede deshacer esta accion!',
                        cancelButtonText: 'Cancelar',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Borrar!'
                      }).then((result) => {
                        if (result.value) {
                            carouselBtn.submit()
                        }
                      })
                }
              });
        } else {
            portrayInput.click();
        };
    });

    horizontalPhoto.addEventListener('click', function() {

        if (horizontalPhoto.dataset.status == "active") {
            carouselInput.value = horizontalPhoto.name;
            Swal.fire({
                width: '40%',
                background: 'var(--secodary-bg-color)',
                imageUrl:horizontalPhoto.src,
                imageHeight: 500,
                cancelButtonText: 'Cerrar',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar!'
              }).then((result) => {
                if (result.value) {
                    
                    Swal.fire({
                        title: 'Seguro que desea borrar?',
                        width: '40%',
                        background: 'var(--secodary-bg-color)',
                        text:'No se puede deshacer esta accion!',
                        cancelButtonText: 'Cancelar',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Borrar!'
                      }).then((result) => {
                        if (result.value) {
                            carouselBtn.submit()
                        }
                      })
                }
              });
        } else {
            horizontalInput.click();
        };
    });

    detailPhoto.addEventListener('click', function() {
       
        if (detailPhoto.dataset.status == "active") {
            carouselInput.value = detailPhoto.name;
            Swal.fire({
                width: '40%',
                background: 'var(--secodary-bg-color)',
                imageUrl:detailPhoto.src,
                imageHeight: 500,
                cancelButtonText: 'Cerrar',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar!'
              }).then((result) => {
                if (result.value) {
                    
                    Swal.fire({
                        title: 'Seguro que desea borrar?',
                        width: '40%',
                        background: 'var(--secodary-bg-color)',
                        text:'No se puede deshacer esta accion!',
                        cancelButtonText: 'Cancelar',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Borrar!'
                      }).then((result) => {
                        if (result.value) {
                            carouselBtn.submit()
                        }
                      })
                }
              });

        } else {
            detailInput.click();
        };
    });



    let contador = 0;
    imagesArray.forEach((e)=>{
        console.log(e.children[0].dataset.status);
        if(e.children[0].dataset.status == "active"){
            contador++;
        }
    });
    imagesArray.forEach(div => div.addEventListener('click', imgClick));
    function imgClick(e) {    
           if(e.target.dataset.status == "active") {
            carouselInput.value = e.target.name;
            console.log(carouselInput)
            Swal.fire({
                width: '40%',
                background: 'var(--secodary-bg-color)',
                //html: <p>No se puede deshacer esta accion!</p>,
                imageUrl:e.target.src,
                imageHeight: 500,
                cancelButtonText: 'Cerrar',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar!'
              }).then((result) => {
                if (result.value) {
                    
                    Swal.fire({
                        title: 'Seguro que desea borrar?',
                        width: '40%',
                        background: 'var(--secodary-bg-color)',
                        text:'No se puede deshacer esta accion!',
                        cancelButtonText: 'Cancelar',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Borrar!'
                      }).then((result) => {
                        if (result.value) {
                            carouselBtn.submit()
                        }
                      })
                }
              });
            } else {
                e.target.nextElementSibling.click(); 
            };
            
   }
        
    
   

})