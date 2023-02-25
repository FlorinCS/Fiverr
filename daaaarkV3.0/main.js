const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
let image = document.getElementById("modal");
console.log("1a".includes("10"));
const calendarDays = 24;
let actualDay = new Date().getDate();
//Here you can choose the day for testing purposes
//actualDay=24;
function setCookie() {
  var arrCalendar = "foo";
  console.log(arrCalendar);
  var json_str_calendar = arrCalendar;
  document.cookie = json_str_calendar;
}

let imageControll = 0;

//If you delete the comment you can delete the Cookie
if (document.cookie == "") {
  setCookie();
}

const openDoor = (path, event) => {
  event.target.parentNode.style.backgroundImage = `url(${path})`;
};

const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    courseNumber = i + 1;
    let coursePath = `./Bilder/bild${courseNumber}.jpeg`;
    if (i < actualDay) {
      if (document.cookie.includes(calendarDoorText.innerText)) {
        calendarDoorText.parentElement.style.backgroundImage = `url(${coursePath})`;
      }
      calendarDoorText.addEventListener(
        "click",
        openDoor.bind(null, coursePath)
      );
      calendarDoorText.addEventListener("click", myFunction);
      calendarDoorText.parentElement.addEventListener("click", ImageControll);
      image.addEventListener("click", ImageControll2);
    }
    function ImageControll() {
      if (imageControll == 0) {
        image.style.display = "unset";
        image.style.backgroundImage = "url(" + coursePath + ")";
        image.style.backgroundSize = "contain";
        image.style.backgroundRepeat = "no-repeat";
        image.style.backgroundPosition = "center";
        image.style.backgroundColor = "rgba(1,1,1,0.5)";
        image.style.cursor = "pointer";
        imageControll = 1;
      }
    }
    function ImageControll2() {
      if (imageControll == 1) {
        image.style.display = "none";
        image.style.cursor = "none";
        imageControll = 0;
      }
    }
    function myFunction() {
      if (calendarDoorText.innerText <= actualDay) {
        if (document.cookie.includes(calendarDoorText.innerText) == false) {
          // let calendarCookie=document.cookie;
          //console.log(calendarCookie.push(calendarDoorText.innerText));
          document.cookie = document.cookie + " " + calendarDoorText.innerText;
        }
      }
    }
  }
};

calendarButton.addEventListener("click", createCalendar);
