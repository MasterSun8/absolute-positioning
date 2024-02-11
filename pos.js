const follower = document.createElement('circle') // gigachads dont use classes

document.body.appendChild(follower)


function moveFollower() {
    follower.style.transform = `translate(100px, ${window.screen.availHeight/2-window.screenY}px)`
    // console.log([window.screenY + window.innerHeight])
    window.requestAnimationFrame(moveFollower)
}

moveFollower()