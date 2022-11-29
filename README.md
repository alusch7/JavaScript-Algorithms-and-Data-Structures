# JavaScript-Algorithms-and-Data-Structures
The included files are the final five projects required to acquire FreeCodeCamp's JS Algorithms and Data Structures certification. Course completion took roughly 30 hours (the course quotes 300 and there are **I completed over 250 exercises**). This is my first exposure to JavaScript, and I completed the certification to learn the language.

**Certification:** https://www.freecodecamp.org/certification/a_lusch/javascript-algorithms-and-data-structures
<img width="1147" alt="image" src="https://user-images.githubusercontent.com/76706672/204637070-2841d751-fcc2-4e83-9c57-b7f5238b6942.png">

## Caesar's Cipher
**Question:**

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus ```A ↔ N```, ```B ↔ O``` and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## Cash Register
**Question:**

Design a cash register drawer function ```checkCashRegister()``` that accepts purchase price as the first argument (```price```), payment as the second argument (```cash```), and cash-in-drawer (```cid```) as the third argument.

```cid``` is a 2D array listing available currency.

The ```checkCashRegister()``` function should always return an object with a ```status``` key and a ```change``` key.

Return ```{status: "INSUFFICIENT_FUNDS", change: []}``` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return ```{status: "CLOSED", change: [...]}``` with cash-in-drawer as the value for the key ```change``` if it is equal to the change due.

Otherwise, return ```{status: "OPEN", change: [...]}```, with the change due in coins and bills, sorted in highest to lowest order, as the value of the ```change``` key.

## Palindrome Checker
**Question:**

Return ```true``` if the given string is a palindrome. Otherwise, return ```false```.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as ```racecar```, ```RaceCar```, and ```race CAR``` among others.

We'll also pass strings with special symbols, such as ```2A3*3a2```, ```2A3 3a2```, and ```2_A3*3#A2```.

## Telephone Number Validator
**Question:**

Return ```true``` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as ```800-692-7753``` or ```8oo-six427676;laskdjf```. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is ```1```. Return ```true``` if the string is a valid US phone number; otherwise return ```false```.

## Roman Numeral Converter
**Question:**

Convert any given arabic numeral into a roman numeral.

| Roman Numeral | I | IV | V | IX | X | XL | L | XC | C | CD | D | CM | M |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Arabic Numeral | 1 | 4 | 5 | 9 | 10 | 40 | 50 | 90 | 100 | 400 | 500 | 900 | 1000 |
