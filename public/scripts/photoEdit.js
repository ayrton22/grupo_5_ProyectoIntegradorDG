function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    let portrayPhoto = qs('img.productEdit-form-uploadImage--portray');
    let horizontalPhoto = qs('img.productEdit-form-uploadImage--horizontal');
    let detailPhoto = qs('img.productEdit-form-uploadImage--detail');

    let imagesArray = document.getElementsByName('carousel');

    let inputsArray = document.getElementsByName('carouselInput');

    let crossArray = document.getElementsByName('carouselZoomCross');

    let btnArray = document.getElementsByName('carouselZoomBtn');

    let generalZoomArray = document.getElementsByName('single-image-carousel');

    console.log(generalZoomArray);
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

    imagesArray.forEach(function(element, position) {
        element.addEventListener('click', function() {

            if (element.dataset.status == "active") {
                
                generalZoomArray.forEach(function(subElement) {
                    
                    subElement[position].classList.remove('inactive-single-image-container');
                    subElement[position].classList.add('active-single-image-container');
                    
                });

                crossArray.forEach(function() {
                    
                    generalZoomArray.forEach(function(subElement) {
                    
                        subElement[element].classList.remove('active-single-image-container');
                        subElement[element].classList.add('inactive-single-image-container');
                        
                    });    

                });

                btnArray.forEach(function() {
                    
                    element.dataset.status = "inactive";
                    element.src = "/img/Logos/Photo-upload.jpg"

                    generalZoomArray.forEach(function(subElement) {
                    
                        subElement[element].classList.remove('active-single-image-container');
                        subElement[element].classList.add('inactive-single-image-container');
                        
                    });    
                    
                })

            } else {

                inputsArray.forEach(function(subElement) {
                    subElement[element].click()
                })

            };

        })
    })

})