// Write your JavaScript code here.
function init () {
    let button = document.getElementById("takeoff");
    let newFlightStatus = document.getElementById("flightStatus");

    console.log("jfklajfdlak",button);


    // Put your code for the exercises here.
    button.addEventListener("click", function() {
        let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (shuttleReady === true) {
            newFlightStatus.innerHTML = "Shuttle in flight.";
        } 
        // else {

        // }

    })
}

window.onload = init;







// Remember to pay attention to page loading!