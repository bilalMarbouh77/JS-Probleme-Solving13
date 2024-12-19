function spinWords(string){
    let arr = string.split(" ")
    let newArr=[]
    let index=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>=5){
            newArr.push(arr[i])
            index.push(i)
        }
    }
    for(let i =0;i<newArr.length;i++){
        let st=""
        for(let j=newArr[i].length-1;j>=0;j--){
            st +=newArr[i][j]
        }
        newArr[i]=st
    }
    for(let i=0;i<index.length;i++){
        arr[index[i]] = newArr[i]
    }
    string = arr.join(" ");
    return string;
}
let str="Just kidding there is still one more"
console.log(spinWords(str))

// Question

// Write a function that takes in a string of one or more words,
// and returns the same string, but with all words that have
// five or more letters reversed (Just like the name of
// this Kata). Strings passed in will consist of only letters 
// and spaces. Spaces will be included only when more
// than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"