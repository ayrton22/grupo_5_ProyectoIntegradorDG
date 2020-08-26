function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    let profileImg = qs('img.profile-avatar-img-edit');

    let inputImg = qs('input#upload');

    profileImg.addEventListener('click', function() {
        inputImg.click()
    })
})