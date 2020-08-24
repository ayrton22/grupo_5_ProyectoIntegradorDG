function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    let answerAction = qs('div.community-question span');

    let answerForm = qs('form.community-answer-form');

    answerAction.addEventListener('click', function() {
        
        answerForm.classList.remove('inactive-answer-form');
        answerForm.classList.add('active-answer-form');

    })
})