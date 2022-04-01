const countDownTimer = function (id, date) {
    // 목표 시간
    var _vDate = new Date(date);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60; 
    var _day = _hour * 24; 
    var timer;

    function showRemaining() { 
        var now = new Date(); 
        var distDt = _vDate - now; 

        var background = document.getElementById("background");
        
        // 목표 시간 되면
        if (distDt < 0) { 
            clearInterval(timer); 
            window.location.href = '../after_514/after_home.html'
            return; 
        } 
        
        var days = Math.floor(distDt / _day); 
        var hours = Math.floor((distDt % _day) / _hour); 
        var minutes = Math.floor((distDt % _hour) / _minute); 
        var seconds = Math.floor((distDt % _minute) / _second); 
        //document.getElementById(id).textContent = date.toLocaleString() + "까지 : "; 
        document.getElementById(id).textContent = days + ': '; 
        document.getElementById(id).textContent += hours + ': '; 
        document.getElementById(id).textContent += minutes + ': '; 
        document.getElementById(id).textContent += seconds; 
    } 
    timer = setInterval(showRemaining, 1000);
}

var dateObj = new Date(); 
dateObj.setDate(dateObj.getDate() + 1); 

//countDownTimer('demo', '03/25/2022 09:00 PM');
countDownTimer('demo', '05/14/2022 00:00 AM');



