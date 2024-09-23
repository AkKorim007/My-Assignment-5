function toggleBtn(Id){
    const btnOne = document.getElementById('show-donation-page');
    const btnTwo = document.getElementById('show-history-page');
    
    btnOne.classList.remove('bg-btn-bg');
    btnOne.classList.add('bg-white');

    btnTwo.classList.remove('bg-btn-bg');
    btnTwo.classList.add('bg-white');
   

    const clickedButton = document.getElementById(Id)
    clickedButton.classList.remove('bg-white');
    clickedButton.classList.add('bg-btn-bg');
}