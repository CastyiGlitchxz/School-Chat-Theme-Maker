function OpenProperties() {
  let controls = document.getElementById("controls");
  
  controls.style.marginLeft = "0%";
  controls.style.transition = "all 1s";
}

function CloseProperties() {
  controls.style.marginLeft = "-22%";
  controls.style.transition = "all 1s";
}

// Document Object Model imports
let BodyColor = document.getElementById("body-color");
let SidenavColor = document.getElementById("sn-color");
let SidesColor = document.getElementById("s-color");
let TextColor = document.getElementById("t-color");
let OnlineListColor = document.getElementById("oul-color");
let OnlineListTextColor = document.getElementById("oult-color");
let ChatBoxColor = document.getElementById("chb-color");
let SendButton = document.getElementById("sb-color");
let TopLeft = document.getElementById("snb-color");
let SidenavTextColor = document.getElementById("snt-color");
let BorderColor = document.getElementById("bdr-color");
let ShadowColor = document.getElementById("shd-color");
let TopbarColor = document.getElementById("tpb-color");
let TopbarTextColor = document.getElementById("tpbt-color");
let DropDownBorderColor = document.getElementById("tpbdr-color");
let TopbarShadowColor = document.getElementById("tpbs-color");
let theme_name1 = document.getElementById("n_name");
let theme_name2 = document.getElementById("themeNL");

let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
let textbox3 = document.getElementById("textbox3");
let textbox4 = document.getElementById("textbox4");
let textbox5 = document.getElementById("textbox5");
let textbox6 = document.getElementById("textbox6");

let infobox = document.getElementById("info");

let Response = document.getElementById("Response");

let snbr = document.getElementById("sn-br");
let snwd = document.getElementById("sn-wd");

let applyButton = document.getElementById("applyButton");
let code = document.getElementById("code");

// Don't be confused

const body = document.getElementsByTagName("body")[0];
const chat = document.getElementById("chat");
const message = document.getElementById("message");
const chatbox = document.getElementById("chatbox");
const sides = document.getElementById("sides");
const topleft = document.getElementById("topleft");
const send = document.getElementById("send");
const sidebar = document.getElementById("activenav");
const online = document.getElementById("online_users");
const sidenav = document.getElementsByClassName("sidenav")[0];
const snavText = sidenav.getElementsByTagName("a");
const roomText = document.getElementById("room_text");
const roomBar = document.getElementById("room_bar");
const topbar = document.getElementById("topbar");
// const hrElement = document.querySelector("hr");

// Auto updates page and apply changes
// setInterval(Update, 100)

// function Update() {
//   document.getElementById("ColorDisplay").style.background = document.getElementById("body-color").value;
  
//   document.title = theme_name1.value + " - Theme Editor";

//   document.body.style.background = BodyColor.value;

  // document.getElementById("mySidenav").style.background = SidenavColor.value;

  // document.getElementById("sides").style.background = SidesColor.value;

  // document.body.style.color = TextColor.value;

  // document.getElementById("activenav").style.background = OnlineListColor.value;

  // document.getElementById("activenav").style.boxShadow = "10px 20px 17px 16px" + ShadowColor.value;

  // document.getElementById("activenav").style.borderLeft = "5px solid" + BorderColor.value;

  // document.getElementById("activenav").style.color = OnlineListTextColor.value;

  // document.getElementById("online_users").style.color = OnlineListTextColor.value;

  // document.getElementById("chatbox").style.background = ChatBoxColor.value;

  // document.getElementById("send").style.background = SendButton.value;

  // document.getElementById("topleft").style.color = TopLeft.value;

  // document.getElementById("topbar").style.background = TopbarColor.value;

  //   document.getElementById("topbar").style.color = TopbarTextColor.value;

  // document.getElementById("topbar").style.boxShadow = "0px -1px 44px 15px" + TopbarShadowColor.value;

  // document.getElementById("pfpmenu").style.border = "2px solid" + DropDownBorderColor.value;

//   let sidenav = document.getElementsByClassName("sidenav")[0];
//   let snav_text = sidenav.getElementsByTagName("a");
//   let snav_iter = snav_text.length;
//   for (let i = 0; i < snav_iter; i++) {
//       snav_text[i].style.color = SidenavTextColor.value;
//   }
// }

// After this is the Theme & CSE code


// Fix this later
function showcode() {
  code.style.display = "grid";
 const theme = `
  const ${theme_name1.value} = [ <br>
    "${body.style.background}", <br>
    "${chat.style.color}", <br>
    "${message.style.color}", <br>
    "${chatbox.style.background}", <br>
    "${sides.style.background}", <br>
    "${sidebar.style.background}", <br>
    "${sidebar.style.borderColor}", <br>
    "${sidebar.style.color}", <br>
    "${topleft.style.background}", <br>
    "${topleft.style.color}", <br>
    "${send.style.background}", <br>
    "${send.style.color}", <br>
    "${sidenav.style.background}", <br>
    "${sidenav.style.color}", <br>
    "", <br>
    "", <br>
    "${topbar.style.background}" <br>
  ];
  `

  console.log(theme)
  code.innerHTML = theme;
}

// Controls Sidenav
function openNav() {
  if (window.screen.width <= 450) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
  }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


const AllContent = document.querySelectorAll("#ChatMockup");
const menuOwner = document.getElementById("menuOwner");

// Applies defualt theme values
function apply_default_theme() {
  
}

AllContent.forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    element.classList.toggle("active");

    menuOwner.innerHTML = event.target.id;

    OpenProperties();

    const CurrentElement = element;
    var SelectedLayer = event.target.id;
    const ColorBox = document.getElementById("body-color");
    const textColor = document.getElementById("text-color");
    const borderColor = document.getElementById("border-color");
    const LayerProperties = document.getElementById("LayerProperties");
    const LayerOpacity = document.getElementById("LayerOpacity");
    const Chat = document.getElementById("ChatMockup");


    console.log(SelectedLayer);

    document.getElementsByClassName("ColorDisplay")[0].style.background = document.getElementById(`${SelectedLayer}`).style.background;

    document.getElementsByClassName("ColorDisplay")[1].style.background = document.getElementById(`${SelectedLayer}`).style.color;

    document.getElementsByClassName("ColorDisplay")[2].style.background = document.getElementById(`${SelectedLayer}`).style.shadowColor;

    document.getElementsByClassName("ColorDisplay")[3].style.background = document.getElementById(`${SelectedLayer}`).style.borderColor;

    applyButton.addEventListener("click", (event) => {
      if (SelectedLayer == menuOwner.innerHTML) {
        document.getElementById(SelectedLayer).style.background = ColorBox.value;
        document.getElementById(SelectedLayer).style.color = textColor.value;
        document.getElementById(SelectedLayer).style.borderColor = borderColor.value;
        console.log(CurrentElement);
        console.log(SelectedLayer);


        LayerProperties.addEventListener("click", (event) => {
          document.getElementById(SelectedLayer).style.display = "none";
        });

        setInterval(Update, 100);

        function Update() {
          // event.target.style.background = ColorBox.value;
          document.body.style.background = chat.style.background;
          Chat.style.background = chat.style.background;
          
          event.target.style.opacity = LayerOpacity.value + "%";
        };

        Update();
      }
    });
  });
});

// const properties = {
//   "Background Color": disabled,
//   "Text Color": disabled,
//   "Border Color": disabled,
//   "Shadow Color": disabled,
// };

document.title = theme_name1.value + " - Theme Editor";

theme_name1.addEventListener("focusout", (event) => {
  document.title = theme_name1.value + " - Theme Editor";
});