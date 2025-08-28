// heart function

const hearts = document.getElementsByClassName("heart-icon");
for(const i of hearts){
    i.addEventListener("click", function(e){
        e.preventDefault();
        console.log("heart-icon clicked")
    })
}