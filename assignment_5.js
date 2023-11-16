
// Function to parse a string in "YYYY-MM-DD HH:MM:SS" format into a Date object
// function parseDateTime(input) {
//     const [dateStr, timeStr] = input.split(' ');
  
//     if (!dateStr || !timeStr) {
//       console.log('Invalid input format. Please use "YYYY-MM-DD HH:MM:SS" format.');
//       return;
//     }
  
//     const [year, month, day] = dateStr.split('-');
//     const [hours, minutes, seconds] = timeStr.split(':');
  
//     if (year.length !== 4 || month.length !== 2 || day.length !== 2 ||
//         hours.length !== 2 || minutes.length !== 2 || seconds.length !== 2) {
//       console.log('Invalid date or time format.');
//       return;
//     }
  
//     const parsedDate = new Date(year, month - 1, day, hours, minutes, seconds);
  
//     if (isNaN(parsedDate.getTime())) {
//       console.log('Invalid date or time values.');
//       return;
//     }
  
//     return parsedDate;
//   }
  
// // Set the countdown end date and time (YYYY-MM-DD HH:MM:SS format)
// const countdownEndDate = document.getElementById("input").value;
// const dateTime = parseDateTime(countdownEndDate);

const dateTime = "2023-10-25 00:00:00"
function updateCountdown() {
    document.getElementById("hardcodevalue").innerHTML = "End Datetime is : " + dateTime;
    const currentDate = new Date();
    const endDate = new Date(dateTime);

    const timeDifference = endDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } 
    else 
    {
        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = "Countdown expired!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

//Calling the function
updateCountdown();
