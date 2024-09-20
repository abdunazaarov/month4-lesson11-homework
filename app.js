// 1 - Masala

// Argument sifatida berilgan arrayning o’rtasidagi sonni topadigan function yarating 
// [1,2,3,4,5] ⇒ o’rtasidagi son 3 
// [1,2,3,4] ⇒ o’rtasidagi son (2 + 3) / 2 = 2.5 ya’ni o’rtadagi 2 tasini qo’shib 2 ga bo’lish kerak


// {
//     const findMiddle = (arr) => {
//         let middleIndex = Math.floor(arr.length / 2);
    
//         if (arr.length % 2 !== 0) {
//             return arr[middleIndex]; 
//         } 
//         else {
//             return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
//         }
//     };
    
//     console.log(findMiddle([1, 2, 3, 4, 5]));
//     console.log(findMiddle([1, 2, 3, 4]));    
    
// }

// -----------------------------------------------------------------------------------

// 2 - Masala

// Argument sifatida berilgan sonning tub son yoki tub emasligini aniqlaydigan function yarating


// {
//     function isPrime(num) {
//         if (num <= 1) {
//             return false; 
//         }
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false; 
//             }
//         }
//         return true; 
//     }
    
//     console.log(isPrime(2));  
//     console.log(isPrime(4));  
//     console.log(isPrime(17)); 
//     console.log(isPrime(18));
    
// }

// ------------------------------------------------------------------------------------

// 3 - Masala

// 2 sonining qandaydir darajasini bildiruvchi qandaydir n butun son berilgan (n > 0) berilgan n son 2 ning qanday k darajadaligini toping
// input: 8 , k = 3


// {
//     function Daraja(n){
//         let k = 0
//         while(n > 1){
//             if (n % 2 === 0){
//                 n = n / 2
//                 k++
//             }
//             else{
//                 return `N soni 2 ning darajasi emas.`
//             }
//         }
//         return `N soni 2 ning ${k} darajasi.`
//     }

//     console.log(Daraja(37));
// }


// ----------------------------------------------------------------------------

// 4 - Masala

// Mukammal sonni aniqlash funksiyasi


// {
//     function isPerfectNumber(num) {
//         let sum = 0;
//         for (let i = 1; i < num; i++) {
//             if (num % i === 0) {
//                 sum += i;
//             }
//         }
//         return sum === num;
//     }
    
//     console.log(isPerfectNumber(6));  
//     console.log(isPerfectNumber(28)); 
//     console.log(isPerfectNumber(10)); 
    
// }

// --------------------------------------------------------------------------------

// 5 - Masala

// Sonning nechta xonali ekanligini aniqlash funksiyasi


// {
//     function getDigitCount(num) {
//         return num.toString().length;
//     }
    
//     console.log(getDigitCount(12345)); 
//     console.log(getDigitCount(987654));
    
// }

// --------------------------------------------------------------------------------

// 6 - Masala

// a harfi ishtirok etgan so‘zlarni hisoblaydigan funksiya


// {
//     function countWordsWithA(str) {
//         const words = str.split(' ');
//         let count = 0;
//         words.forEach(word => {
//             if (word.includes('a') || word.includes('A')) {
//                 count++;
//             }
//         });
//         return count;
//     }
    
//     console.log(countWordsWithA("This is a simple task for a junior developer")); 
//     console.log(countWordsWithA("Avocado and apples are great")); 
    
// }

// ------------------------------------------------------------------------

// 7 - Masala

// Eng qisqa so‘zni qaytaruvchi funksiya


// {
//     function getShortestWord(sentence) {
//         const words = sentence.split(' ');
//         let shortestWord = words[0];
    
//         words.forEach(word => {
//             if (word.length < shortestWord.length) {
//                 shortestWord = word;
//             }
//         });
    
//         return shortestWord;
//     }
    
//     console.log(getShortestWord("This is a test sentence")); 
//     console.log(getShortestWord("Finding shortest word in a sentence")); 
    
// }

// -------------------------------------------------------------------------

// 8 - Masala

// Argumentni tekshirish funksiyasi


// {
//     function checkArgumentType(arg) {
//         if (typeof arg === 'number') {
//             return "son";
//         } else if (typeof arg === 'string') {
//             return "string";
//         } else {
//             return 0;
//         }
//     }
    
//     console.log(checkArgumentType(123)); 
//     console.log(checkArgumentType("hello")); 
//     console.log(checkArgumentType([1, 2, 3]));
    
// }

// --------------------------------------------------------------------

// 9 - Masala

// Stringni teskari qiluvchi funksiya


// {
//     function reverseString(str) {
//         return str.split('').reverse().join('');
//     }
    
//     console.log(reverseString("hello")); 
//     console.log(reverseString("developer")); 
    
// }

// --------------------------------------------------------------------

// 10 - Masala

// Stringda nechta son qatnashganligini aniqlaydigan funksiya


// {
//     function countDigitsInString(str) {
//         let count = 0;
//         for (let i = 0; i < str.length; i++) {
//             if (!isNaN(str[i]) && str[i] !== ' ') {
//                 count++;
//             }
//         }
//         return count;
//     }
    
//     console.log(countDigitsInString("My phone number is 12345")); 
//     console.log(countDigitsInString("I have 2 apples and 3 oranges")); 
    
// }

// -----------------------------------------------------------------------------