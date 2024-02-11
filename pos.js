var spawns = new Array()
var locations = JSON.parse(`{${document.cookie}}`)[0] || new Array()

if (!document.cookie) {
    document.cookie = '"0": []'
}

function spawn(fresh=false) {
    let hellspawn = document.createElement('circle')
    spawns.push(hellspawn)
    console.log(":3")
    locations = JSON.parse(`{${document.cookie}}`)[0]
    if(fresh){
        let middle = [window.screenX + window.innerWidth/2, window.screenY + window.innerHeight/2]
        locations.push(middle)
        console.log(locations)
        document.cookie = `"0": ${JSON.stringify(locations)}`
    }
    document.body.appendChild(hellspawn)
}

function deleteCookie(name) {
    document.cookie = `'${name}': ''; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}

var checkCookie = function () {
    return function () {
        var currentCookie = document.cookie
        if (currentCookie != lastCookie && currentCookie) {
            lastCookie = currentCookie
            locations = JSON.parse(`{${lastCookie}}`)[0]
            spawn()
            console.log(locations)
        }
    }
}()

let creatures = 0
while(creatures<locations.length){
    spawn()
    creatures++
}
spawn(true)

var lastCookie = document.cookie

window.setInterval(checkCookie, 100);

function moveFollower() {
    try{
        spawns.forEach((e, i) => {
            e.style.transform = `translate(${locations[i][0] - window.screenX}px, ${locations[i][1] - window.screenY}px)`
        })
    }
    catch{
        // console.error("wtfff")
    }
    window.requestAnimationFrame(moveFollower)
}

moveFollower()