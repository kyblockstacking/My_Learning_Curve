// Check to see if string is a palindrome

// palindrome definition: a word, phrase, or sequence that reads the same backward as forward

isPalindrome = (string) => {
    return string === string.split("").reverse().join("");
};

console.log(isPalindrome("hello")); // false "elloh" != "hello"

console.log(isPalindrome("racecar")); // true