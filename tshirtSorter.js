// Write your solution below:

function sorter(shirts){
    var small = ''
    var medium = ''
    var large = ''
    for (let i=0;i<shirts.length;i++){
        if (shirts[i] === "s"){
            small += "s"
        }else if(shirts[i] === "m"){
        medium+= "m"
        }else if (shirts[i] === "l"){
            large += "l"
        }
    }    
    var sorted = small+medium+large
    console.log(sorted)
}

sorter("smllms")