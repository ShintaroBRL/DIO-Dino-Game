const game = document.querySelector('.game');
const background = document.querySelector('.background');

let isJumping = false;
let dinoPosition = 0;

function handleKeyUp(event){
    if (event.keyCode === 32) {
        if(!isJumping){
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (dinoPosition >= 150) {
            clearInterval(upInterval);
            //Descendo
            let downInterval = setInterval(() => {
                if(dinoPosition == 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    dinoPosition -= 20;
                    game.style.bottom = dinoPosition + 'px';
                }
            }, 20)
        }else{
            //Subindo
            dinoPosition += 20;
            game.style.bottom = dinoPosition + 'px';
        }
    }, 20)
}

function createCactus() {
    //random
    let randomTime = Math.random() * 6000;

    //cactus instance
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    let cactusPosition = 1000;
    background.appendChild(cactus);

    //cactus movement
    let letfInterval = setInterval(()=>{
        if(cactusPosition < -60){
            clearInterval(letfInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && dinoPosition < 60){
            //game-over
            clearInterval(letfInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo!</h1>';
        }else{cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20)

    setTimeout(createCactus,randomTime);

}

createCactus();

document.addEventListener('keyup', handleKeyUp)