// Write your solution below:
function makeUnique(phrase){
var uniqueStr = ''
    for (let i=0 ; 1<phrase.length; i++){
        if (uniqueStr.includes(phrase[i])){
            continue
        }else{
            uniqueStr += phrase[i]
        };
        console.log(uniqueStr)
    };
    return uniqueStr
};
// I don't know why the program doesn't close or why it adds undefined at the end.
// From what I see mine looks the same as the solution but it's not working the same.
// it's like it never exits the for loop? but I don't know whyyyyyyy



makeUnique("helloworld")
//makeUnique("iwanttoclimbamountain")