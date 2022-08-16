let fs = require("fs")
//take input
let inputArr = process.argv.slice(2);
//seperate commands and files
//command consist of "-"
// two arrays
let optionsArr = [];
let filesArr = [];
for (let i = 0; i < inputArr.length; i++) {
    let firstchar = inputArr[i].charAt(0);
    if (firstchar == "-") {
        optionsArr.push(inputArr[i]);   //send it to options array
    }
    else {
        filesArr.push(inputArr[i]);  //send it to files array
    }
}
//edge cases
// both b and n present
let isBandNpresent = optionsArr.includes("-b")&&optionsArr.includes("-n")
if(isBandNpresent==true)
    {console.log("error");
return;}
//check file entered exists or not

    
//read file
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let buffer = fs.readFileSync(filesArr[i]); //content in buffer
    content += buffer + "\r\n"; //add it to content file
    // \n to create enter after file

}
//  console.log(content);
let contentArr = content.split("\r\n"); //split on the basis of enter
//  console.log(contentArr);

//identify -s
let isSPresent = optionsArr.includes("-s");
if (isSPresent == true)
//then make "" = null
{
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        }
        else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;

        }
    }
    //temporary array to store all the values other than null
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    //make it = tempArr
    contentArr = tempArr;

    // console.log(contentArr);
}
console.log("``````````````````````")
// console.log(contentArr.join("\n"));

//identify n
let isNpresent = optionsArr.includes("-n");
if(isNpresent==true){
    for (let i=0;i<contentArr.length;i++){
        contentArr[i]=`${i+1} ${contentArr[i]} `;
    }
}
//identify b
let isBpresent = optionsArr.includes("-b");
if(isBpresent==true){
    let counter = 1
    for (let i=0;i<contentArr.length;i++){
        if(contentArr[i] != "")
        contentArr[i]=`${counter} ${contentArr[i]} `;
        counter++;
    }
}
console.log(contentArr.join("\n"));

