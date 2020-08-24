window.addEventListener("load", function(){
    let form = document.querySelector("productEdit-form");

    form.addEventListener("click", function(e){
        e.preventDefault();

        let titleEdit = document.getElementById("titleEdit");
        if(titleEdit.value === ""){
            alert("Error");
        }
    })
})
