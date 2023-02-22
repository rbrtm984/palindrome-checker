function palindrome(str) {
    let arr = [];
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(str[i].match(/[^_\W]/)) {
        arr.push(str[i]);
      };
    };
    //console.log(arr);
    for(let i = 0; i < arr.length; i++) {
      console.log("Here we go");
      //console.log(arr[i]);
      for(let j = arr.length - 1; j >= 0; j--) {
        console.log(`arr[i] ${arr[i]}`);
        console.log(`arr[j] ${arr[j]}`)
        if(!(arr[i] === arr[j])) {
          return false;
        } else {
          console.log("Yup");
          i++;
        };
      };
      return true;
    };
    //console.log(arr);
    return true;
  }
  
  palindrome("A man, a plan, a canal. Panama");
  //palindrome("_eye");
  //palindrome("race car");