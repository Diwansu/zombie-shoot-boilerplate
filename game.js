// Iteration 1: Declare variables required for this game
 

let gameBody = document.getElementById('game-body')
 let lives=document.getElementById('lives')
 let seconds=document.getElementById('timer').textContent
 var zombieId = 0 ;

 let health=4 ;
// Iteration 1.3: Add background sound
 const backgroundSound =new Audio('./assets/bgm.mp3')
 backgroundSound.play();
 backgroundSound.loop =true 
 

 // Iteration 1.2: Add shotgun sound
 const shotgunSound = new Audio('./assets/shotgun.wav')
 shotgunSound.volume = 0.1 

 
gameBody.onclick = ()=>{
    shotgunSound.pause()
    shotgunSound.currentTime=0 
    shotgunSound.play()
     };


 function getRandomInt (min,max) {
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min ;
    //The maximum is exclusive and the minimum is inclusive. 
}

 var zombieId = 0 ;
 const img = [
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
   ];

    makeZombie()

    function makeZombie (){
      let randomImg = img[getRandomInt(0,img.length)]
     gameBody.innerHTML += `<img src= './assets/${randomImg}'

     class="zombie-image" id="zombies${zombieId}">`;
     
     let zombie= document.getElementById(`zombies${zombieId}`)
     zombie.style.transform = `translateX(${getRandomInt(15,75)}vw)`
     
     zombie.onclick=()=> {
      zombieDestruct(zombie)
     }
      
    }
     //console.log(randomImg); 
       function zombieDestruct(zombie){
         zombie.style.display = 'none' ;
         zombieId ++ ;
         makeZombie() 
       }

       function checkcollision(zombie){
        if(zombie.getBoundingClientRect().top<=0){
            health-- 
            return true 
        } 
        return false
       } 

       var timer=setInterval(()=>{
        seconds--
        document.getElementById('timer').textContent=seconds
           
        let zombie=document.getElementById(`zombies${zombieId}`)
        
        if(checkcollision(zombie)==true){
            zombieDestruct(zombie)
            if(health==0) {
                clearInterval(timer)
                location.href ='./game-over.html'
            }
        }

        if(seconds==0){
            clearInterval(timer)
            location.href ='./win.html'
        }
    },1000)
     
     
    

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
