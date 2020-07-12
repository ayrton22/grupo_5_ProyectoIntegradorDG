var upload = document.getElementById('upload');

function onFile() {
    var me = this,
        file = upload.files[0],
        name = file.name.replace(/.[^/.]+$/, '');
    console.log('upload code goes here', file, name);
}

upload.addEventListener('dragenter', function (e) {
    upload.parentNode.className = 'area dragging';
}, false);

upload.addEventListener('dragleave', function (e) {
    upload.parentNode.className = 'area';
}, false);

upload.addEventListener('dragdrop', function (e) {
    onFile();
}, false);

upload.addEventListener('change', function (e) {
    onFile();
}, false);