console.log("hello! All ok");

// document.getElementById("allBtn").addEventListener("click", function () {
//   const allBtn = document.getElementById("allBtn");
//   const buttons = document.getElementsByClassName("button_common");
//   buttons.classList.remove("bg-blue-500", "text-white");
//   allBtn.classList.add("bg-blue-500", "text-white");
//   allCardsLoad();
// });

// async function allCardsLoad() {
//   const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}");
//   console.log(res);
//   const data = await res.json();
//   console.log(data.data);
// }


async function allCardsLoad() {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  console.log(res);
  const datas = await res.json();
  console.log(datas.data);
  displayAllCards(datas.data);
}


// "id": 1,
//  "title": "Fix navigation menu on mobile devices",
//  "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//   "status": "open",
//   "labels": [
//           "bug",
//           "help wanted"
//         ],
//    "priority": "high",
//    "author": "john_doe",
//    "assignee": "jane_smith",
//    "createdAt": "2024-01-15T10:30:00Z",
//    "updatedAt": "2024-01-15T10:30:00Z"



// function displayAllCards(data) {
//   const mainSection = document.getElementById("mainSection");
//   mainSection.innerHTML = "";

//   data.forEach(data => {
//     console.log(data);
//     const creatDiv = document.createElement("div");

//     // open hoile open img r closed hoile closed img dekhabo
//     let statusImage = "";
//     if (data.status == "open") {
//       statusImage = "./assets/Open-Status.png";
//     } else if(data.status == "closed"){
//       statusImage = "./assets/Closed- Status .png"
//     }
//     else if (data.labels =="high") {
//       statusImage = "./"
//     }

//     // priority onujai design hobe
//     let priorityDesign = "";
//     if (data.priority == "high" && data.btn == "bug") {
//       priorityDesign = "bg-red-100 text-red-300 border-none text-[16px]";
//     }
//     else if (data.priority == "medium" && data.btn == "help wanted") {
//       priorityDesign = "bg-amber-50 text-amber-300 border-none text-[16px]";
//     }
//     else if (data.btn == "enhancement") {
//       priorityDesign = "bg-green-50 text-green-300 border-none rounded-full text-[16px]";
//     }

//     // card er niche j duita button ase tar looping
//     let btns = "";
//     for (btn of data.labels) {
//       // console.log(btn);
//       btns = `<button class="btn ${priorityDesign}"><img src="./assets/bug.png" alt="">
//             Bug</button>`;
//     }


//     creatDiv.innerHTML = `
//       <!-- Card -->
//       <div class="card bg-white shadow-xl p-3 space-y-3 h-full">

//         <!-- images part -->
//         <div class="imgs flex justify-between items-center">
//           <img class="block" src="${statusImage}" alt="">
//           <button class="btn ${priorityDesign} rounded-full">${data.priority}</button>
//         </div>

//         <h1 class="font-bold text-2xl line-clamp-1">${data.title}</h1>
//         <p class="text-[#64748B] text-[16px] line-clamp-2">${data.description}</p>

//         <div class="flex gap-1">
//           ${btns}
//         </div>

//         <div class="divider"></div>

//         <div class="text-[#64748B] space-y-1 p-2">
//           <p>#1
//             by john_doe</p>
//           <p>1/15/2024</p>
//         </div>
//       </div>
//     `;
//     mainSection.appendChild(creatDiv);
//   });
// }

function displayAllCards(data) {
  const mainSection = document.getElementById("mainSection");
  mainSection.innerHTML = "";

  data.forEach(item => {

    let statusImage = "";
    if (item.status === "open") {
      statusImage = "./assets/Open-Status.png";
    } else {
      statusImage = "./assets/Closed- Status .png";
    }

    // labels buttons toiri kora holo
    let btns = "";
    item.labels.forEach(label => {
      let design = "";
      let icon = "";

      if (label === "bug") {
        design = "bg-red-100 text-red-300 border-none rounded-full text-[16px]";
        icon = "./assets/bug.png";
      } else if (label === "help wanted") {
        design = "bg-amber-50 text-amber-300 border-none rounded-full text-[16px]";
        icon = "./assets/helpWanted.png";
      } else if (label === "enhancement") {
        design = "bg-green-50 text-green-300 border-none rounded-full text-[16px]";
        icon = "./assets/inhancement.png";
      } else if (label === "good first issue") {
        design = "bg-blue-50 text-blue-300 border-none rounded-full text-[16px]";
      } else if (label === "documentation") { 
        design = "bg-amber-50 text-amber-300 border-none rounded-full text-[16px]";
      }

      btns += `<button class="btn ${design}"><img src="${icon}" alt=""> ${label}</button>`;
    });

    // Card তৈরি
    const creatDiv = document.createElement("div");
    creatDiv.innerHTML = `
      <div class="card bg-white shadow-xl p-3 space-y-3 h-full">

        <!-- images part -->
        <div class="imgs flex justify-between items-center">
          <img class="block" src="${statusImage}" alt="${item.status}">
          <button class="btn ${item.priority === "high"
        ? "bg-red-100 text-red-300 border-none text-[16px]"
        : item.priority === "medium"
          ? "bg-amber-50 text-amber-300 border-none text-[16px]"
          : "bg-green-50 text-green-300 border-none text-[16px]"
      } rounded-full">${item.priority}</button>
        </div>

        <h1 class="font-bold text-2xl line-clamp-1">${item.title}</h1>
        <p class="text-[#64748B] text-[16px] line-clamp-2">${item.description}</p>

        <div class="flex gap-1">
          ${btns}
        </div>

        <div class="divider"></div>

        <div class="text-[#64748B] space-y-1 p-2">
          <p>#1 by ${item.author}</p>
          <p>${new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    `;

    mainSection.appendChild(creatDiv);
  });
}


function clickButton(id) {
  const allBtn = document.getElementById(id);
  const buttons = document.getElementsByClassName("button_common");

  // jehetu classname diya onekgulo class dhora jay tai ekta ekta kore classlist remove korte hobe
  for (let btn of buttons) {
    btn.classList.remove("bg-blue-500", "text-white");
  }

  allBtn.classList.add("bg-blue-500", "text-white");

  if (id == "allBtn") {
    allCardsLoad();
    document.getElementById("mainSection").classList.remove("hidden");
  } else {
    console.log("api ekhono fetch kora hoy nai");
    document.getElementById("mainSection").classList.add("hidden");
  }
}