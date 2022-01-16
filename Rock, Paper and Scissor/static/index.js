var flag    // distinguish Rock, Paper and Scissor
function rpsCheckPoint(numChoice) {    // assigning randomly generated no to rock, ....
    switch (numChoice) {
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        default:
            return "scissor"
            break
    }
}
function changeImgForResult(rpsStatus) {            // Replace images to show final result
    switch (rpsStatus) {
        case "rock":
            return "static/images/rock_pic.png"
            break
        case "paper":
            return "static/images/paper_pic.png"
            break
        default:
            return "static/images/scissor_pic.png"
            break
    }
}

function showResult() {
    document.getElementById("child1").src = gameOn.userPicLocation
    document.getElementById("child2").innerHTML = gameOn.finalResult
    document.getElementById("child3").src = gameOn.computerPicLocation

}

let gameOn = {                          // object for running 
    rpsCheck: function () {             // Linking with the click
        this.computerRandomInt = Math.trunc(Math.random() * 3) // Gives random int num from 0 - 2
        this.computer = rpsCheckPoint(this.computerRandomInt)
        this.user = rpsCheckPoint(flag)
        console.log("User " + this.user)
        this.userPicLocation = changeImgForResult(this.user)
        this.computerPicLocation = changeImgForResult(this.computer)
        console.log("Computer " + this.computer)
        this.checkResult()
        console.log(flag)
        showResult()
    },
    checkResult: function () {                  //Gives final result
        if (this.user === this.computer) {
            console.log("Draw.")
            this.finalResult = "You tied"
        }
        else if ((this.user === "paper" && this.computer === "rock") || (this.user === "rock" && this.computer === "scissor") || (this.user === "scissor" && this.computer === "paper")) {
            console.log("You win.")
            this.finalResult = "You win."
        }
        else {
            console.log("You lose.")
            this.finalResult = "You lose"
        }

    }
}