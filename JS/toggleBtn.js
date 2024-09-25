const historyTab = document.getElementById("show-history-page");
const donationTab = document.getElementById("show-donation-page");
historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        "bg-btn-bg", 
        "text-black"
    );
    historyTab.classList.remove("text-gray-bg");
    donationTab.classList.remove(
        "bg-btn-bg", 
        "text-black"
    );
    donationTab.classList.add("text-gray-bg");

});

donationTab.addEventListener('click', function(){
    donationTab.classList.add(
        "bg-btn-bg", 
        "text-black"
    );
    donationTab.classList.remove("text-gray-bg");
    historyTab.classList.remove(
        "bg-btn-bg", 
        "text-black"
    );
    historyTab.classList.add("text-gray-bg");

});

