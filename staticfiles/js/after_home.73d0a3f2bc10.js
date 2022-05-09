// 애니메이션 랜덤 플로팅

function moveDiv() {
    var container = document.getElementById("#duo");
    var floating = Math.round(Math.random() + 120);
    container.style.transform = 'translate(' + floating + 'px, ' + floating + 'px)'; 
};

moveDiv();
setInterval(moveDiv, 5000);