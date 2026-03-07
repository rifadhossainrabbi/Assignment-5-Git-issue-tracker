console.log("hello! All ok");

// document.getElementById("allBtn").addEventListener("click", function () {
//   const allBtn = document.getElementById("allBtn");
//   const buttons = document.getElementsByClassName("button_common");
//   buttons.classList.remove("bg-blue-500", "text-white");
//   allBtn.classList.add("bg-blue-500", "text-white");
//   allCardsLoad();
// });

async function allCardsLoad() {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  console.log(res);
  const data = await res.json();
  console.log(data.data);
}

// async function allCardsLoad() {
//   const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}");
//   console.log(res);
//   const data = await res.json();
//   console.log(data.data);
// }




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