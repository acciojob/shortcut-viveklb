function shortcut(s1, s2) {
  // Return an empty string if either of the strings is empty
  if (s1 === "" || s2 === "") {
    return "";
  }
  
  // Return the first character of both strings concatenated
  return s1.charAt(0) + s2.charAt(0);
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));