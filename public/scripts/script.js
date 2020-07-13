document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function show_hide(){
    let click = document.getElementById('drop-cont');
    let click2 = document.getElementById('drop-cont2');
    if(click.style.display === 'none'){
        click.style.display = 'block';
    } else {
        click.style.display = 'none';
    }

    if(click2.style.display = 'block'){
        click2.style.display = 'none';
    }
}

function show_hide2(){
    let click = document.getElementById('drop-cont2');
    let click2 = document.getElementById('drop-cont');
    if(click.style.display === 'none'){
        click.style.display = 'block';
    } else {
        click.style.display = 'none';
    }

    if(click2.style.display = 'block'){
        click2.style.display = 'none';
    }
}

function containerHide(){
    let click = document.getElementById('drop-cont');
    if (click.style.display === 'block'){
        click.style.display = 'none'
    }

    let click2 = document.getElementById('drop-cont2');
    if (click2.style.display === 'block'){
        click2.style.display = 'none'
    }
}