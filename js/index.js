
// heart button clicked
const hearts = document.getElementsByClassName("heart-icon");
for (const i of hearts) {
  i.addEventListener("click", function (e) {
    e.preventDefault();
    const heartIncrease = parseInt(document.getElementById("heart-increase").innerText)
    const heartIncreaseField = heartIncrease + 1;
    document.getElementById("heart-increase").innerText = heartIncreaseField
  })
}

// reusable function
function handleCall(cardId, titleId, descriptionId, cost = 20) {
  document.getElementById(cardId).addEventListener("click", function (e) {
    e.preventDefault();
    const title = document.getElementById(titleId).innerText;
    const description = document.getElementById(descriptionId).innerText;
    alert(title + " " + description);

    const pointElement = document.getElementById("point-btn");
    const point = parseInt(pointElement.innerText);
    const pointValue = point - cost;

    if (pointValue < 0) {
      alert("No available balance");
      return;
    }

    pointElement.innerText = pointValue;

    const serviceSection = document.getElementById("call-history");
    const div = document.createElement("div");
    const time = new Date().toLocaleTimeString();

    div.innerHTML = `
      <div class="flex justify-between items-center bg-[#FAFAFA] p-3 rounded-lg mt-4">
        <div>
          <h2 class="text-lg font-semibold">${title}</h2>
          <p>${description}</p>
        </div>
        <div>
          <p>${time}</p>
        </div>
      </div>
    `;
    serviceSection.appendChild(div);
  });
}

// call function all cards
handleCall("card-1", "title-1", "description-1");
handleCall("card-2", "title-2", "description-2");
handleCall("card-3", "title-3", "description-3");
handleCall("card-4", "title-4", "description-4");
handleCall("card-5", "title-5", "description-5");
handleCall("card-6", "title-6", "description-6");
handleCall("card-7", "title-7", "description-7");
handleCall("card-8", "title-8", "description-8");
handleCall("card-9", "title-9", "description-9");


// clear-history section 
document.getElementById("clear-history").addEventListener("click", function (e) {
  e.preventDefault()
  const clearBtn = document.getElementById("call-history")
  clearBtn.innerHTML = ""
})

// reusable function in copy button
function handleCopy(copyId, descriptionId) {
  document.getElementById(copyId).addEventListener("click", function (e) {
    e.preventDefault()
    const description = document.getElementById(descriptionId).innerText;
    navigator.clipboard.writeText(description).then(() => {
      alert("Number successfully copied! " + description);
    }).catch(err => {
      alert("Failed to copy: " + err);
    });
    const copyBtn = document.getElementById("copy-increase");
    const copyElement = parseInt(copyBtn.innerText);
    const copyValue = copyElement + 1;
    copyBtn.innerText = copyValue;
  })

}

// copy button clicked
handleCopy("copy-1", "description-1")
handleCopy("copy-2", "description-2")
handleCopy("copy-3", "description-3")
handleCopy("copy-4", "description-4")
handleCopy("copy-5", "description-5")
handleCopy("copy-6", "description-6")
handleCopy("copy-7", "description-7")
handleCopy("copy-8", "description-8")
handleCopy("copy-9", "description-9")
// document.getElementById("copy-1").addEventListener("click", function (e) {
//   e.preventDefault();
//   const description = document.getElementById("description-1").innerText;
//   navigator.clipboard.writeText(description).then(() => {
//     alert("Number successfully copied! " + description);
//   }).catch(err => {
//     alert("Failed to copy: " + err);
//   });
//   const copyBtn = document.getElementById("copy-increase");
//   const copyElement = parseInt(copyBtn.innerText);
//   const copyValue = copyElement + 1;
//   copyBtn.innerText = copyValue;
// });

// document.getElementById("copy-2").addEventListener("click", function (e) {
//   e.preventDefault();
//   const description = document.getElementById("description-2").innerText;
//   navigator.clipboard.writeText(description).then(() => {
//     alert("Number successfully copied! " + description);
//   }).catch(err => {
//     alert("Failed to copy: " + err);
//   });
//   const copyBtn = document.getElementById("copy-increase");
//   const copyElement = parseInt(copyBtn.innerText);
//   const copyValue = copyElement + 1;
//   copyBtn.innerText = copyValue;
// });
