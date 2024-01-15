function OpenX() {
  let controls = document.getElementById("controls");

  if (controls.style.marginLeft === "") {
    controls.style.marginLeft = "-22%";
    controls.style.transition = "all 1s";
  } else {
    controls.style.marginLeft = "";
    controls.style.transition = "all 1s";
  }
}

//Document Object Model imports
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



//Auto updates page to apply changes
setInterval(Update, 100)

function Update() {
  document.title = theme_name1.value + " - Theme Editor";

  document.body.style.background = BodyColor.value;

  document.getElementById("mySidenav").style.background = SidenavColor.value;

  document.getElementById("sides").style.background = SidesColor.value;

  document.body.style.color = TextColor.value;

  document.getElementById("activenav").style.background = OnlineListColor.value;

  document.getElementById("activenav").style.boxShadow = "10px 20px 17px 16px" + ShadowColor.value;

  document.getElementById("activenav").style.borderLeft = "5px solid" + BorderColor.value;

  document.getElementById("activenav").style.color = OnlineListTextColor.value;

  document.getElementById("online_users").style.color = OnlineListTextColor.value;

  document.getElementById("chatbox").style.background = ChatBoxColor.value;

  document.getElementById("send").style.background = SendButton.value;

  document.getElementById("topleft").style.color = TopLeft.value;

  document.getElementById("topbar").style.background = TopbarColor.value;

    document.getElementById("topbar").style.color = TopbarTextColor.value;

  document.getElementById("topbar").style.boxShadow = "0px -1px 44px 15px" + TopbarShadowColor.value;

  document.getElementById("pfpmenu").style.border = "2px solid" + DropDownBorderColor.value;

  let sidenav = document.getElementsByClassName("sidenav")[0];
  let snav_text = sidenav.getElementsByTagName("a");
  let snav_iter = snav_text.length;
  for (let i = 0; i < snav_iter; i++) {
      snav_text[i].style.color = SidenavTextColor.value;
  }
}

//After this is the Theme & CSE code


//Fix this later
function showcode() {
    bc2 = '"' + bc.value + '"'
    snc2 = '"' + snc.value + '"'
    sb2 = '"' + sb.value + '"'//send button
    snb2 = '"' + snb.value + '"' //side nav button
    snt2 = '"' + snt.value + '"' //side nav text
    sc2 = '"' + sc.value + '"'
    tc2 = '"' + tc.value + '"'
    oulc2 = '"' + oulc.value + '"'
    chbc2 = '"' + chbc.value + '"'
    Response.innerHTML = `<font color="#ffffff">function set${theme_name1.value}Style() {<dd>
  // set theme in cookie<br>
  setTheme("${theme_name2.value}");<br>
  // get all id tags<br>
    let body = document.getElementsByTagName("body")[0];
  let chat = document.getElementById("chat");<br>
  let message = document.getElementById("message");<br>
  let chatbox = document.getElementById("chatbox");<br>
  let sides = document.getElementById("sides");<br>
  let topleft = document.getElementById("topleft");<br>
  let send = document.getElementById("send");<br>
  let sidebar = document.getElementById("activenav");<br>
    let sidenav = document.getElementsByClassName("sidenav")[0];<br>
  let snav_text = sidenav.getElementsByTagName("a");<br>
  let snav_iter = snav_text.length;<br>
  // then set the color to what it is in the css document<br>
  body.style.backgroundColor = ${bc2};<br>
  chat.style.color = ${tc2};<br>
  message.style.color = "#000000";<br>
  chatbox.style.backgroundColor = ${chbc2};<br>
  sides.style.backgroundColor = ${sc2};<br>
  sidebar.style.backgroundColor = ${oulc2};<br>
  topleft.style.backgroundColor = ${chbc2};<br>
  topleft.style.color = ${snb2};<br>
  send.style.backgroundColor = ${sb2};<br>
  send.style.color = "#ffffff";<br>
  sidenav.style.backgroundColor = ${snc2};<br>
  // for loop to cycle thru links in sidebar<br>
  for (let i = 0; i < snav_iter; i++) {<br>
      snav_text[i].style.color = ${snt2};<br>
  }</dd><br>
}</font>`
}

//Controls Sidenav
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