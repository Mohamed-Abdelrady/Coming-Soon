var contDown = setInterval(function () {
    'use strict';
    timeLeft();
}, 1000);

function timeLeft() {
    'use strict';
    var dayLeft = document.getElementById('day'),
        hourLeft = document.getElementById('hour'),
        minLeft = document.getElementById('min'),
        secLeft = document.getElementById('sec'),
        dayValue = parseInt(dayLeft.innerHTML),
        hourValue = parseInt(hourLeft.innerHTML),
        minValue = parseInt(minLeft.innerHTML),
        secValue = parseInt(secLeft.innerHTML);

    if (secValue > 0) {
        secValue = secValue - 1;
    } else {
        if (minValue > 0) {
            minValue = minValue - 1;
            secValue = 59;
        } else {
            if (hourValue > 0) {
                hourValue = hourValue - 1;
                minValue = 59;
            } else {
                if (dayValue > 0) {
                    dayValue = dayValue - 1;
                    hourValue = 23;
                }
            }
        }
    }

    if (dayValue < 10) {
        dayValue = '0' + dayValue;
    }
    if (hourValue < 10) {
        hourValue = '0' + hourValue;
    }
    if (minValue < 10) {
        minValue = '0' + minValue;
    }
    if (secValue < 10) {
        secValue = '0' + secValue;
    }

    dayLeft.innerHTML = dayValue;
    hourLeft.innerHTML = hourValue;
    minLeft.innerHTML = minValue;
    secLeft.innerHTML = secValue;

    if (dayValue == 0 && hourValue == 0 && minValue == 0 && secValue == 0) {
        clearInterval(contDown);
        document.getElementById('count-down').innerHTML = `
        <p>done,thanks for waiting.</p>
        <p>please refresh the site for loading</p>`;
        document.getElementById('count-down').setAttribute('class', 'position-relative');
    }
}
