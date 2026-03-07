console.log("hello! All ok");


async function allCardsLoad() {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  console.log(res);
  const datas = await res.json();
  console.log(datas.data.length);
  displayAllCards(datas.data);
}
allCardsLoad();

function displayAllCards(data) {
  const mainSection = document.getElementById("mainSection");
  mainSection.innerHTML = "";

  data.forEach(item => {
    // console.log(item.priority);

    let statusImage = "";
    let cardTopBorder = "";
    if (item.status === "open") {
      statusImage = "./assets/Open-Status.png";
      cardTopBorder = "border-t-4 border-green-500";
    } else {
      statusImage = "./assets/Closed- Status .png";
      cardTopBorder = "border-t-4 border-purple-500";
    }


    // button priority design
    let priorityDesign = "";
    if (item.priority == "high") {
      priorityDesign = "bg-red-100 text-red-500 border-none rounded-full text-[16px]";
    } else if (item.priority == "medium") {
      priorityDesign = "bg-amber-100 text-amber-500 border-none rounded-full text-[16px]";
    } else {
      priorityDesign = "bg-gray-100 text-gray-500 border-none rounded-full text-[16px]"
    }

    // labels buttons toiri kora holo
    let btns = "";
    item.labels.forEach(label => {
      let design = "";
      let icon = "";

      if (label === "bug") {
        design = "bg-red-100 text-red-400 border-none rounded-full text-[16px]";
        icon = "./assets/bug.png";
      } else if (label === "help wanted") {
        design = "bg-amber-100 text-amber-400 border-none rounded-full text-[16px]";
        icon = "./assets/helpWanted.png";
      } else if (label === "enhancement") {
        design = "bg-green-100 text-green-400 border-none rounded-full text-[16px]";
        icon = "./assets/inhancement.png";
      } else if (label === "good first issue") {
        design = "bg-blue-100 text-blue-400 border-none rounded-full text-[16px]";
      } else if (label === "documentation") {
        design = "bg-amber-100 text-amber-400 border-none rounded-full text-[16px]";
      }

      // btns += `<button class="btn ${design}"><img src="${icon}" alt=""> ${label}</button>`;
      btns += `<button class="btn ${design}">
  ${icon ? `<img src="${icon}" alt="">` : ""} ${label}
</button>`;
    });

    // Card toiri
    const creatDiv = document.createElement("div");
    creatDiv.innerHTML = `
      <div class="card bg-white shadow-xl p-3 space-y-3 h-full ${cardTopBorder} w-full">

        <!-- images part -->
        <div class="imgs flex justify-between items-center">
          <img class="block" src="${statusImage}" alt="${item.status}">
          <button class="btn ${priorityDesign} rounded-full">${item.priority}</button>
        </div>

        <h1 class="font-bold text-2xl line-clamp-1">${item.title}</h1>
        <p class="text-[#64748B] text-[16px] line-clamp-2">${item.description}</p>

        <div class="flex justify-start flex-wrap gap-2 w-full">
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
  const issueNumberSet = document.getElementById("issueNumber").innerText = `${mainSection.children.length} Issues`;
}


async function clickButton(id) {

  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  console.log(res);
  const datas = await res.json();

  const allBtn = document.getElementById(id);
  const buttons = document.getElementsByClassName("button_common");

  // jehetu classname diya onekgulo class dhora jay tai ekta ekta kore classlist remove korte hobe
  for (let btn of buttons) {
    btn.classList.remove("bg-blue-500", "text-white");
  }
  
  allBtn.classList.add("bg-blue-500", "text-white");

  if (id == "allBtn") {
    allCardsLoad();
    const mainSection = document.getElementById("mainSection").classList.remove("hidden");
    // console.log(mainSection.children.length);
  } else if (id == "openBtn") {
    const openCards = datas.data.filter(card => card.status === "open");
    displayAllCards(openCards);
  }
  else if (id == "closedBtn") {
    const closedCards = datas.data.filter(card => card.status === "closed");
    displayAllCards(closedCards);
  }
}