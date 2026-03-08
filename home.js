console.log("hello! All ok");


// spineer show function
const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  const mainSection = document.getElementById("mainSection");
  spinner.classList.remove("hidden");
  mainSection.classList.add("hidden");
}

const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  const mainSection = document.getElementById("mainSection");
  spinner.classList.add("hidden");
  mainSection.classList.remove("hidden");
}


// display modal
const loadModal = (id) => {
  console.log(id);
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then(res => res.json())
    .then(data => displayModal(data.data));
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
}


const displayModal = (item) => {
  console.log(item);

  let openAndCloseDesign = "";
  if (item.status == "open") {
    openAndCloseDesign = "py-1 px-6 bg-green-500 text-white rounded-full";
  } else if (item.status == "closed") {
    openAndCloseDesign = "py-1 px-6 bg-red-500 text-white rounded-full";
  }

  let priorityDesign = "";
  if (item.priority == "high") {
    priorityDesign = "py-1 px-6 bg-red-500 text-white border-none rounded-full text-[14px]";
  } else if (item.priority == "medium") {
    priorityDesign = "py-1 px-6 bg-amber-500 text-white border-none rounded-full text-[14px]";
  } else {
    priorityDesign = "py-1 px-6 bg-gray-400 text-white border-none rounded-full text-[14px]"
  }

  let btns = "";
  item.labels.forEach(label => {
    let design = "";
    let icon = "";

    if (label === "bug") {
      design = "bg-red-50 text-red-500 border-none rounded-full text-[12px]";
      icon = "./assets/bug.png";
    } else if (label === "help wanted") {
      design = "bg-amber-50 text-amber-500 border-none rounded-full text-[12px]";
      icon = "./assets/helpWanted.png";
    } else if (label === "enhancement") {
      design = "bg-green-50 text-green-500 border-none rounded-full text-[12px]";
      icon = "./assets/inhancement.png";
    } else if (label === "good first issue") {
      design = "bg-blue-50 text-blue-500 border-none rounded-full text-[12px]";
    } else if (label === "documentation") {
      design = "bg-amber-50 text-amber-500 border-none rounded-full text-[12px]";
    }

    // btns += `<button class="btn ${design}"><img src="${icon}" alt=""> ${label}</button>`;
    btns += `<button class="flex items-center gap-1.5 py-1.5 px-3 ${design}">
      ${icon ? `<img class="w-[14px] h-[14px] block" src="${icon}" alt="">` : ""} ${label}
      </button>`;
  });

  const detailConatiner = document.getElementById("modal_container");
  detailConatiner.innerHTML = `
    <h3 class="text-lg font-bold">${item.title}</h3>

        <div class="flex items-center gap-8">
          <button class="${openAndCloseDesign}">${item.status}</button>
          <ul class="flex gap-8">
            <li class="list-disc">Opened by ${item.assignee ? item.assignee : "unknown"}</li>
            <li class="list-disc">${new Date(item.createdAt).toLocaleDateString()}</li>
          </ul>
        </div>

        <!-- buttons -->
        <div class="flex gap-3">
            ${btns}
        </div>
        <p>${item.description}</p>
        <div class="bg-gray-200 p-4 grid grid-cols-2">

          <div>
            <p>Assignee:</p>
            <h1>${item.assignee ? item.assignee : "unknown"}</h1>
          </div>

          <div>
            <p>Priority:</p>
            <button class="${priorityDesign}">${item.priority}</button>
          </div>
        </div>

        <!-- modal close btn -->
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-primary">Close</button>
          </form>
        </div>
  `;
}

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
      priorityDesign = "py-1 px-6 bg-red-100 text-red-500 border-none rounded-full text-[14px]";
    } else if (item.priority == "medium") {
      priorityDesign = "py-1 px-6 bg-amber-100 text-amber-500 border-none rounded-full text-[14px]";
    } else {
      priorityDesign = "py-1 px-6 bg-gray-100 text-gray-500 border-none rounded-full text-[14px]"
    }

    // labels buttons toiri kora holo
    let btns = "";
    item.labels.forEach(label => {
      let design = "";
      let icon = "";

      if (label === "bug") {
        design = "bg-red-50 text-red-500 border-none rounded-full text-[12px]";
        icon = "./assets/bug.png";
      } else if (label === "help wanted") {
        design = "bg-amber-50 text-amber-500 border-none rounded-full text-[12px]";
        icon = "./assets/helpWanted.png";
      } else if (label === "enhancement") {
        design = "bg-green-50 text-green-500 border-none rounded-full text-[12px]";
        icon = "./assets/inhancement.png";
      } else if (label === "good first issue") {
        design = "bg-blue-50 text-blue-500 border-none rounded-full text-[12px]";
      } else if (label === "documentation") {
        design = "bg-amber-50 text-amber-500 border-none rounded-full text-[12px]";
      }

      // btns += `<button class="btn ${design}"><img src="${icon}" alt=""> ${label}</button>`;
      btns += `<button class="flex items-center gap-1.5 py-1.5 px-3 ${design}">
      ${icon ? `<img class="w-[14px] h-[14px] block" src="${icon}" alt="">` : ""} ${label}
      </button>`;
    });

    // Card toiri
    const creatDiv = document.createElement("div");
    creatDiv.innerHTML = `
      <div onclick="loadModal(${item.id})" class="card bg-white shadow-xl p-3 space-y-3 h-full ${cardTopBorder} w-full">

        <!-- images part -->
        <div class="imgs flex justify-between items-center">
          <img class="block" src="${statusImage}" alt="${item.status}">
          <button class="${priorityDesign} rounded-full">${item.priority}</button>
        </div>

        <h1 class="font-bold text-2xl line-clamp-1">${item.title}</h1>
        <p class="text-[#64748B] text-[16px] line-clamp-2">${item.description}</p>

        <div class="flex justify-start gap-1.5 w-full">
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
  document.getElementById("issueNumber").innerText = `${mainSection.children.length} Issues`;
  hideSpinner();
}

async function allCardsLoad() {
  showSpinner();

  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  console.log(res);
  const datas = await res.json();
  console.log(datas.data.length);
  displayAllCards(datas.data);
  // hideSpinner();
}
allCardsLoad();



async function clickButton(id) {
  showSpinner();

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
  } else if (id == "openBtn") {
    const openCards = datas.data.filter(card => card.status === "open");
    displayAllCards(openCards);
  }
  else if (id == "closedBtn") {
    const closedCards = datas.data.filter(card => card.status === "closed");
    displayAllCards(closedCards);
  } else if (id == "issueSearchBtn") {
    const inputSearch = document.getElementById("inputSearch");
    const inputSearchValue = inputSearch.value.toLowerCase();

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${inputSearchValue}`)
      .then(res => res.json())
      .then(items => displayAllCards(items.data));
  }
}