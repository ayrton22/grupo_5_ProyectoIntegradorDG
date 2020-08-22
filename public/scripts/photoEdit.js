function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    let portrayPhoto = qs('img.productEdit-form-uploadImage--portray');
    let horizontalPhoto = qs('img.productEdit-form-uploadImage--horizontal');
    let detailPhoto = qs('img.productEdit-form-uploadImage--detail');
    let image1 = qs('img#one');
    let image2 = qs('img#two');
    let image3 = qs('img#three');
    let image4 = qs('img#four');
    let image5 = qs('img#five');
    let image6 = qs('img#six');
    let image7 = qs('img#seven');
    let image8 = qs('img#eight');
    let image9 = qs('img#nine');
    let image10 = qs('img#ten');

    let portrayInput = qs('input#portray');
    let horizontalInput = qs('input#horizontal');
    let detailInput = qs('input#detail');
    let image1Input = qs('input#one');
    let image2Input = qs('input#two');
    let image3Input = qs('input#three');
    let image4Input = qs('input#four');
    let image5Input = qs('input#five');
    let image6Input = qs('input#six');
    let image7Input = qs('input#seven');
    let image8Input = qs('input#eight');
    let image9Input = qs('input#nine');
    let image10Input = qs('input#ten');

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

})