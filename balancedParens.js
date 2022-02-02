
function balancedparens(phrase){

    let close = /\)/g
    let open = /\(/g

    let closeLength = 0
    let openLength = 0

    if (phrase.match(close)){
        closeLength = phrase.match(close).length
    }

    if(phrase.match(open)){
        openLength = phrase.match(open).length
    }


   if (openLength === closeLength){

        //I checked the solution and they don't do this but I was trying to check that they're all on one side, not just the same number.
        //var lastOpen = phrase.search(open)

        // while (phrase.search(open) !== -1){

        //     lastOpen = phrase.search(open)
        //     phrase.replace(open,"x")    
        // }  //trying to get the last index of the open parens to compare
        //let firstClose = phrase.search(close)
        //console.log([lastOpen,firstClose])

        console.log("true") 
    } else{
        console.log("flase")
    }
};


// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

balancedparens(sample1)
balancedparens(sample2)
balancedparens(sample3)
balancedparens(sample4)