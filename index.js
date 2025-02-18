function encode(){
    const message=document.getElementById("message");
    let messageVal= message.value.toLowerCase();
    messageVal=[...messageVal];
    alphabetArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z","a","b","c"]
    indexes=[];
    EncrIndex=[];
    EncrChar=[];
    for (char in messageVal){
        indOfEach=alphabetArray.indexOf(messageVal[char]);
        indexes.push(indOfEach);
        let EncryIndOfEach=indOfEach+3;
        EncrIndex.push(EncryIndOfEach);
        let EncryEachChar=alphabetArray[EncryIndOfEach];
        EncrChar.push(EncryEachChar);
        console.log("Encrypted char of encrypted indexes is: ",EncryEachChar);
    }
    EncrChar=EncrChar.join("");
    console.log("The encrymented String: ",EncrChar);
    const output=document.getElementById("output");
    const outputInnertext=output.innerHTML=EncrChar;
    console.log("the inner text of the output paragrahph element is: ",outputInnertext);
}
function decode(){
    const OutputToDecr=document.getElementById("output");
    let messageVal=OutputToDecr.innerHTML;
    console.log("the value of messageVal is: ",messageVal);
    messageVal=[...messageVal];
    alphabetArray=["y","x","z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z","a","b","c"]
    indexes=[];
    EncrIndex=[];
    EncrChar=[];
    for (char in messageVal){
        indOfEach=alphabetArray.indexOf(messageVal[char]);
        indexes.push(indOfEach);
        let EncryIndOfEach=indOfEach-3;
        EncrIndex.push(EncryIndOfEach);
        let EncryEachChar=alphabetArray[EncryIndOfEach];
        EncrChar.push(EncryEachChar);
    }
    EncrChar=EncrChar.join("");
    console.log("The encrymented String: ",EncrChar);
    const output=document.getElementById("output");
    const outputInnertext=output.innerHTML=EncrChar;
    console.log("the inner text of the output paragrahph element is: ",outputInnertext);

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Explaination with comments Code:
function encode(){
    //get element by targeting id
    const message=document.getElementById("message");
    //extracting the value from element
    let messageVal= message.value.toLowerCase();
    //splitting the message value into array of characters
    messageVal=[...messageVal];
    //Assigning the a-z alphabets into array
    alphabetArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z","a","b","c"]
    indexes=[];
    EncrIndex=[];
    EncrChar=[];
    //extracting the indexes of input message characters
    for (char in messageVal){
        indOfEach=alphabetArray.indexOf(messageVal[char]);
        //console.log(indOfEach);
        indexes.push(indOfEach);

        //Encoding into indexes of characters by 3 indexes ahead to their actual index
        let EncryIndOfEach=indOfEach+3;
        EncrIndex.push(EncryIndOfEach);
        //console.log("Encrypted char index is",EncryIndOfEach);

        //Preparing the string of Encrypted indexes
        let EncryEachChar=alphabetArray[EncryIndOfEach];
        EncrChar.push(EncryEachChar);
        console.log("Encrypted char of encrypted indexes is: ",EncryEachChar);

        //Actual indexes list making for ruff purposes
        //indexes.push(indOfEach);
        //console.log("char of messageVals are: ", messageVal[char]);
    }
    //console.log("Indexes of each char of messages are: ",indexes);
    //console.log("Encrypted Indexes of each char of messages are: ",EncrIndex);
    //console.log("Encrypted Characters of Encrypted Indexes of messages are: ",EncrChar);
    
    //Rejoining the array characters to string
    EncrChar=EncrChar.join("");
    console.log("The encrymented String: ",EncrChar);
    //Now updating/manipulating the output paraghaph's innertext/innerHTML with encoded message
    const output=document.getElementById("output");
    const outputInnertext=output.innerHTML=EncrChar;
    console.log("the inner text of the output paragrahph element is: ",outputInnertext);

//console.log("This is the innertext of Output: ",outputInnertext);
//console.log("This was the message: ", messageVal);
}
////Encode Function Works Perfectly://////////////////////////////////////////////////Above
function decode(){
    //get element by targeting id
    // but for decoding, we have to target the innertext of Output that is to be Decoded instead of message becasue
    // the message already became the Output and so is to be decoded itself
    //const message=document.getElementById("");   
    const OutputToDecr=document.getElementById("output");
    //console.log("The output to be decrypted: ",OutputToDecr.innerHTML);

    //extracting the value from element    //While decoding, we just reassign the output innertext rather below
    //let messageVal= message.value;
    let messageVal=OutputToDecr.innerHTML;
    console.log("the value of messageVal is: ",messageVal);
    //splitting the message value into array of characters
    messageVal=[...messageVal];
    //Assigning the a-z alphabets into array
    alphabetArray=["y","x","z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z","a","b","c"]
    indexes=[];
    EncrIndex=[];
    EncrChar=[];
    //extracting the indexes of input message characters
    for (char in messageVal){
        indOfEach=alphabetArray.indexOf(messageVal[char]);
        //console.log(indOfEach);
        indexes.push(indOfEach);

        //Encoding into indexes of characters by 3 indexes ahead to their actual index
        let EncryIndOfEach=indOfEach-3;
        EncrIndex.push(EncryIndOfEach);
        //console.log("Encrypted char index is",EncryIndOfEach);

        //Preparing the string of Encrypted indexes
        let EncryEachChar=alphabetArray[EncryIndOfEach];
        EncrChar.push(EncryEachChar);
        //console.log("Encrypted char of encrypted indexes is: ",EncryEachChar);

        //Actual indexes list making for ruff purposes
        //indexes.push(indOfEach);
        //console.log("char of messageVals are: ", messageVal[char]);
    }
    //console.log("Indexes of each char of messages are: ",indexes);
    //console.log("Encrypted Indexes of each char of messages are: ",EncrIndex);
    //console.log("Encrypted Characters of Encrypted Indexes of messages are: ",EncrChar);
    
    //Rejoining the array characters to string
    EncrChar=EncrChar.join("");
    console.log("The encrymented String: ",EncrChar);
    //Now updating/manipulating the output paraghaph's innertext/innerHTML with encoded message
    const output=document.getElementById("output");
    const outputInnertext=output.innerHTML=EncrChar;
    console.log("the inner text of the output paragrahph element is: ",outputInnertext);

//console.log("This is the innertext of Output: ",outputInnertext);
//console.log("This was the message: ", messageVal);
}*/