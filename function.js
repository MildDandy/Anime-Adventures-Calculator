function random_integer(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
rerolls = 0
var divClone = $("icon").clone()
function roll_trait(){
    var random = random_integer(1, 10003)
    document.getElementById("trait").classList.remove("rare", "epic", "legendary", "mythic");
    if(random >= 1 && random <= 2997){ //Superior - 29.97% chance    
        document.getElementById("trait").innerHTML = "Superior";   
        var random2 = random_integer(1, 3)
        if(random2 < 3){
            document.getElementById("trait").classList.add("rare");  
            GFG_Fun("trait_superior");
        } 
        else{
            document.getElementById("trait").classList.add("epic");   
            GFG_Fun("trait_superior_3");
        }
    }
    else if(random >= 2998 && random <= 5495){ //Nimble - 24.98% chance
        document.getElementById("trait").innerHTML = "Nimble";   
        var random2 = random_integer(1, 3)
        if(random2 < 3){
            document.getElementById("trait").classList.add("rare");  
            GFG_Fun("trait_nimble");
        } 
        else{
            document.getElementById("trait").classList.add("epic");   
            GFG_Fun("trait_nimble_3");
        }   
    }
    else if(random >= 5496 && random <= 7993){ //Range - 24.98% chance
        document.getElementById("trait").innerHTML = "Range";    
        var random2 = random_integer(1, 3)
        if(random2 < 3){
            document.getElementById("trait").classList.add("rare");  
            GFG_Fun("trait_range");
        } 
        else{
            document.getElementById("trait").classList.add("epic");   
            GFG_Fun("trait_range_3");
        } 
    }
    else if(random >= 7994 && random <= 8992){ //Adept - 9.99% chance
        document.getElementById("trait").innerHTML = "Adept";             
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_adept");
    }
    else if(random >= 8993 && random <= 9492){ //Culling - 5% chance
        document.getElementById("trait").innerHTML = "Culling";    
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_culling");
    }
    else if(random >= 9493 && random <= 9742){ //Sniper - 2.5% chance
        document.getElementById("trait").innerHTML = "Sniper";        
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_sniper");
    }
    else if(random >= 9743 && random <= 9842){ //Godspeed - 1% chance
        document.getElementById("trait").innerHTML = "Godspeed";    
        document.getElementById("trait").classList.add("legendary"); 
        GFG_Fun("trait_godspeed");
    }
    else if(random >= 9843 && random <= 9922){ //Reaper - 0.8% chance
        document.getElementById("trait").innerHTML = "Reaper";   
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_reaper");
    }
    else if(random >= 9923 && random <= 9958){ //Celestial - 0.36% chance
        document.getElementById("trait").innerHTML = "Celestial";           
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_celestial");
    }   
    else if(random >= 9959 && random <= 9978){ //Divine - 0.2% chance
        document.getElementById("trait").innerHTML = "Divine";    
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_divine");
    }   
    else if(random >= 9979 && random <= 9993){ //Golden - 0.15% chance
        document.getElementById("trait").innerHTML = "Golden";     
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_golden");
    }   
    else if(random >= 9994 && random <= 10003){ //Unique - 0.1% chance
        document.getElementById("trait").innerHTML = "Unique";   
        document.getElementById("trait").classList.add("mythic"); 
        GFG_Fun("trait_unique");
    }   
    //document.getElementById("seed").innerHTML = random;
    rerolls += 1
    document.getElementById("score").innerHTML = `Rerolls Spent: ` + rerolls;
}

function GFG_Fun(image) {
    var img = document.createElement('img');
    img.src = 'img/assets/sprites/traits/' + image + ".png";
    document.getElementById('icon').appendChild(img);
}

function reset(){
    document.getElementById("score").innerHTML = `Rerolls Spent: 0`;
    document.getElementById("icon").innerHTML = "";
    document.getElementById("trait").innerHTML = "";
    rerolls = 0
}

function roll_until(){
    document.getElementById("trait").classList.remove("mythic");
    document.getElementById("trait").innerHTML = "";
    select = document.getElementById('choices').value;
    if(select == "mythic"){
        while(!(document.getElementById("trait").classList.contains(select))){
            setTimeout(roll_trait(), 100);
        }
    }
    else{
        while(!(document.getElementById("trait").innerHTML == select)){
            setTimeout(roll_trait(), 100);
    }
}
}
