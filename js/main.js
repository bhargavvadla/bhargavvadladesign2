let monthlyBtn = document.getElementById("monthlyBtn");
let yearlyBtn = document.getElementById("yearlyBtn");
let cont1 = document.getElementById("cont1");
let cont2 = document.getElementById("cont2");

function showYearlyTab(){
    monthlyBtn.classList.remove("activeTabBtn");
    yearlyBtn.classList.add("activeTabBtn");
    cont1.classList.add("activeTab");
    cont2.classList.remove("activeTab");
}
function showMonthlyTab(){
    yearlyBtn.classList.remove("activeTabBtn");
    monthlyBtn.classList.add("activeTabBtn");
    cont1.classList.remove("activeTab");
    cont2.classList.add("activeTab");
}

yearlyBtn.addEventListener("click",showYearlyTab);
monthlyBtn.addEventListener("click",showMonthlyTab);
