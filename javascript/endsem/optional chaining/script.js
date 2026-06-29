const mission = {
    rocket: {
        payload: {
            satellite: {
                name: "Voyager-X"
            }
        }
    }
};

let launchDate =
    mission?.rocket?.payload?.satellite?.launchDate ??
    "Launch date awaiting confirmation";

document.getElementById("launch").innerText =
    "Launch Date: " + launchDate;

document.getElementById("crew").innerText =
    "Crew Available: " + ("crew" in mission);