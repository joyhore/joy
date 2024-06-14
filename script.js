let MyName = "Joy Hore"
document.title = MyName



let python = 95
let ino = 80
let git = 90
let html = 70
let css = 80
let js = 90
let flask = 90


document.getElementById("MyName").innerHTML = MyName.split(" ")[0] + "."
document.getElementById("MyName_Name").innerHTML = MyName


document.getElementById("python").innerHTML = python + "%"
document.getElementById("python").style.width = python + "%"

document.getElementById("arduino").innerHTML = ino + "%"
document.getElementById("arduino").style.width = ino + "%"
document.getElementById("python").style.width = python + "%"

document.getElementById("git").innerHTML = git + "%"
document.getElementById("git").style.width = git + "%"

document.getElementById("html").innerHTML = html + "%"
document.getElementById("html").style.width = html + "%"

document.getElementById("css").innerHTML = css + "%"
document.getElementById("css").style.width = css + "%"

document.getElementById("js").innerHTML = js + "%"
document.getElementById("js").style.width = js + "%"

document.getElementById("flask").innerHTML = flask + "%"
document.getElementById("flask").style.width = flask + "%"


function LiveTime() {

    let newDate = new Date();
    DaTe = newDate.toLocaleString();

    document.getElementById("TiMe").innerHTML = DaTe.split(",")[1]
}
setInterval(LiveTime, 500);