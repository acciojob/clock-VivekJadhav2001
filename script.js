//your JS code here. If required.
function renderDate(){
    const date = new Date()
    document.getElementById("timer").innerHTML = date.toLocaleString()
}
setInterval(renderDate,1000)