// const date = new Date().toLocaleTimeString()
// heart function
const hearts = document.getElementsByClassName("heart-icon");
for(const i of hearts){
    i.addEventListener("click", function(e){
        e.preventDefault();
        const heartIncrease = parseInt(document.getElementById("heart-increase").innerText)
        const heartIncreaseField = heartIncrease + 1;
        document.getElementById("heart-increase").innerText = heartIncreaseField 
    })
}

// reuse function
function setInnerTextNumber(id){
    const textNumber = parseInt(document.getElementById(id).innerText)
    return textNumber;
} 

// call function
document.getElementById("call-1").addEventListener("click", function(e){
    e.preventDefault()
    const title = document.getElementById("sub-title").innerText
    const description = document.getElementById("sub-description").innerText
    alert(title + " " + description)
    const point = parseInt(document.getElementById("point-btn").innerText)
    const pointValue = point - 20;
     if(pointValue < 0){
        alert("No available balance")
        return
    }
    document.getElementById("point-btn").innerText = pointValue
    const serviceSection = document.getElementById("call-history")
    const div = document.createElement("div")
    const time = new Date().toLocaleTimeString();
    div.innerHTML = `
    <div class="flex justify-between items-center bg-[#FAFAFA] p-3 rounded-lg mt-4">
            <div>
              <h2 class="text-lg font-semibold">Fire Service Number</h2>
              <p>999</p>
            </div>
            <div>
              <p>${time}</p>
            </div>
          </div>
    `
    serviceSection.appendChild(div);
})

// clear-history function
document.getElementById("clear-history").addEventListener("click", function(e){
  e.preventDefault()
  const clearBtn =  document.getElementById("call-history")
  clearBtn.innerHTML = ""
})