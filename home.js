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

function displayAllCards(data) {
  const mainSection = document.getElementById("mainSection");
  mainSection.innerHTML = "";

  data.forEach(data => {
    console.log(data);
    const creatDiv = document.createElement("div");
    creatDiv.innerHTML = `
      <!-- Card -->
      <div class="card bg-white shadow-xl p-3 space-y-3">

        <!-- images part -->
        <div class="imgs flex justify-between items-center">
          <img class="block" src="./assets/Open-Status.png" alt="">
          <button class="btn bg-red-100 text-red-300 border-none text-[16px] rounded-full">Error</button>
        </div>

        <h1 class="font-bold text-2xl">Fix navigation menu on mobile devices</h1>
        <p class="text-[#64748B] text-[16px]">The navigation menu doesn't collapse properly on mobile devices...</p>

        <div class="flex gap-1">
          <button class="btn bg-red-100 text-red-300 border-none rounded-full text-[16px]"><img src="./assets/bug.png" alt="">
            Bug</button>
          <button class="btn bg-amber-50 text-amber-300 border-none rounded-full text-[16px]"><img src="./assets/helpWanted.png" alt="">
            Help Wanted</button>
            <!-- <button class="btn bg-green-50 text-green-300 border-none rounded-full text-[16px]"><img src="/assets/inhancement.png" alt=""> Enhancement</button> -->
        </div>

        <div class="divider"></div>

        <div class="text-[#64748B] space-y-1 p-2">
          <p>#1
            by john_doe</p>
          <p>1/15/2024</p>
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
  } else {
    console.log("api ekhono fetch kora hoy nai");
  }
}