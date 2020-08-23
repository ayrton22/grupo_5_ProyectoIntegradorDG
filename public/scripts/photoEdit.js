function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    let portrayPhoto = qs('img.productEdit-form-uploadImage--portray');
    let horizontalPhoto = qs('img.productEdit-form-uploadImage--horizontal');
    let detailPhoto = qs('img.productEdit-form-uploadImage--detail');
    let imagesArray = document.querySelectorAll('.carouselcontenedor');

  //  let inputsArray = document.getElementsByName('carouselInput');

   // let crossArray = document.getElementsByName('carouselZoomCross');

   // let btnArray = document.getElementsByName('carouselZoomBtn');

   // let generalZoomArray = document.getElementsByName('single-image-carousel');

    let portrayInput = qs('input#portray');
    let horizontalInput = qs('input#horizontal');
    let detailInput = qs('input#detail');

    let portrayZoom = qs('div#portrayZoom');
    let portrayCross = qs('div#portrayZoom i');
    let portrayBtn = qs('div#portrayZoom button');

    let horizontalZoom = qs('div#horizontalZoom');
    let horizontalCross = qs('div#horizontalZoom i');
    let horizontalBtn = qs('div#horizontalZoom button');

    let detailZoom = qs('div#detailZoom');
    let detailCross = qs('div#detailZoom i');
    let detailBtn = qs('div#detailZoom button');

    let carouselZoom = qs('div#carouselZoom');
    let carouselCross = qs('div#carouselZoom i');
    let carouselBtn = qs('div#carouselZoom button');
    let carouselImg = qs('div#carouselZoom img');



    portrayPhoto.addEventListener('click', function() {

        if (portrayPhoto.dataset.status == "active") {

            portrayZoom.classList.remove('inactive_portray');
            portrayZoom.classList.add('active_portray');

            portrayCross.addEventListener('click', function() {
                portrayZoom.classList.remove('active_portray');
                portrayZoom.classList.add('inactive_portray');
            });

            portrayBtn.addEventListener('click', function() {
                portrayPhoto.dataset.status = "inactive"
                portrayPhoto.src = "/img/Logos/Portray-upload.jpg"
                portrayZoom.classList.remove('active_portray');
                portrayZoom.classList.add('inactive_portray');
            });

        } else {
            portrayInput.click();
        };
    });

    horizontalPhoto.addEventListener('click', function() {

        if (horizontalPhoto.dataset.status == "active") {

            horizontalZoom.classList.remove('inactive_horizontal');
            horizontalZoom.classList.add('active_horizontal');

            horizontalCross.addEventListener('click', function() {
                horizontalZoom.classList.remove('active_horizontal');
                horizontalZoom.classList.add('inactive_horizontal');
            });

            horizontalBtn.addEventListener('click', function() {
                horizontalPhoto.dataset.status = "inactive"
                horizontalPhoto.src = "/img/Logos/horizontal-upload.jpg"
                horizontalZoom.classList.remove('active_horizontal');
                horizontalZoom.classList.add('inactive_horizontal');
            });

        } else {
            horizontalInput.click();
        };
    });

    detailPhoto.addEventListener('click', function() {

        if (detailPhoto.dataset.status == "active") {

            detailZoom.classList.remove('inactive_detail');
            detailZoom.classList.add('active_detail');

            detailCross.addEventListener('click', function() {

                detailZoom.classList.remove('active_detail');
                detailZoom.classList.add('inactive_detail');
            });

            detailBtn.addEventListener('click', function() {
                detailPhoto.dataset.status = "inactive"
                detailPhoto.src = "/img/Logos/detail-upload.jpg"
                detailZoom.classList.remove('active_detail');
                detailZoom.classList.add('inactive_detail');
            });

        } else {
            detailInput.click();
        };
    });

    imagesArray.forEach(div => div.addEventListener('click', imgClick));
    function imgClick(e) {    
           if(e.target.dataset.status == "active") {
                carouselImg.src = e.target.src;
                carouselBtn.removeAttribute('disabled');
                carouselZoom.classList.remove('inactive_carousel');
                carouselZoom.classList.add('active_carousel');
    
                carouselCross.addEventListener('click', function() {
                    
                    carouselZoom.classList.remove('active_carousel');
                    carouselZoom.classList.add('inactive_carousel');
                    });
                
                carouselBtn.addEventListener('click', function() {
                    e.target.dataset.status = "inactive"
                    e.target.src = "/img/Logos/detail-upload.jpg"
                    carouselZoom.classList.remove('active_carousel');
                    carouselZoom.classList.add('inactive_carousel');
                });
    
            } else {
                e.target.nextElementSibling.click(); 
            };
            
   }
        
    
   

})