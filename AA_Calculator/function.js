function random_integer(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function roll_trait(){
    var random = random_integer(1, 10003)
    var rerolls = 0
    if(random >= 1 && random <= 2997){ //Superior - 29.97% chance    
        document.getElementById("trait").innerHTML = "Superior";    
        document.getElementById("seed").innerHTML = random;
        document.getElementById("score").innerHTML = random;
    }
    if(random >= 2998 && random <= 5495){ //Nimble - 24.98% chance
        document.getElementById("trait").innerHTML = "Nimble";   
        document.getElementById("seed").innerHTML = random;
    }
    if(random >= 5496 && random <= 7993){ //Range - 24.98% chance
        document.getElementById("trait").innerHTML = "Range";
        document.getElementById("seed").innerHTML = random;       
    }
    if(random >= 7994 && random <= 8992){ //Adept - 9.99% chance
        document.getElementById("trait").innerHTML = "Adept";        
        document.getElementById("seed").innerHTML = random; 
    }
    if(random >= 8993 && random <= 9492){ //Culling - 5% chance
        document.getElementById("trait").innerHTML = "Culling";      
        document.getElementById("seed").innerHTML = random;   
    }
    if(random >= 9493 && random <= 9742){ //Sniper - 2.5% chance
        document.getElementById("trait").innerHTML = "Sniper";         
        document.getElementById("seed").innerHTML = random;
    }
    if(random >= 9743 && random <= 9842){ //Godspeed - 1% chance
        document.getElementById("trait").innerHTML = "Godspeed";       
        document.getElementById("seed").innerHTML = random; 
    }
    if(random >= 9843 && random <= 9922){ //Reaper - 0.8% chance
        document.getElementById("trait").innerHTML = "Reaper";       
        document.getElementById("seed").innerHTML = random;
    }
    if(random >= 9923 && random <= 9958){ //Celestial - 0.36% chance
        document.getElementById("trait").innerHTML = "Celestial";     
        document.getElementById("seed").innerHTML = random;   
    }   
    if(random >= 9959 && random <= 9978){ //Divine - 0.2% chance
        document.getElementById("trait").innerHTML = "Divine";       
        document.getElementById("seed").innerHTML = random;
    }   
    if(random >= 9979 && random <= 9993){ //Golden - 0.15% chance
        document.getElementById("trait").innerHTML = "Golden";           
        document.getElementById("seed").innerHTML = random;
    }   
    if(random >= 9994 && random <= 10003){ //Unique - 0.1% chance
        document.getElementById("trait").innerHTML = "Unique";          
        document.getElementById("seed").innerHTML = random;
    }   
}


29
30
31
32
33
34


