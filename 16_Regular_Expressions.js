/* match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. for more info visit https://regexr.com/ */

let reg = /javascript/g
const text = "javascript is a fun language. javascript"
const match = text.match(reg);
console.log(match);

const reg2 = /\d/g  /* g for global(flag) */
const text2 = "My name is Someth1ng"
const match2 = text2.match(reg2);
console.log(match);


/* reg expression for matching all the words with starting capital letter */

const reg3 = /[A-Z]/g
const text3 = "My Name is Something"
const match3 = text3.match(reg3);
console.log(match3);


/* capturing postal codes exmaple */

const reg4 = /\(\d{3}\)\s\d{3}-\d{4}/g;
const postalCode = "This is a postal code (123) 456-7890, (231) 453-4543";
const match4 = postalCode.match(reg4)
console.log(match4);

const reg5 = /\b[a-z0-9]+@[a-z0-9]+\.[a-z]{2,7}\b/g;
const text5 = "singh@gmail.com"
const match5 = text5.match(reg5);
console.log(match5)

/* Regular Expression at the beginning and end of a sentence */

const reg6 = /^\bThis\b/
const text6 = "This is Javascript"
const match6 = text6.match(reg6);
console.log(match6);

const reg7 = /\bThankyou\b$/
const text7 = "This is Javascript, Thankyou"
const match7 = text7.match(reg7);
console.log(match7);

/* Validation of simple password*/
function validation() {
    let regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+-=])[A-Za-z\d@$!%*?&]{8,}$/;  /* ?=.* represents atleast one occurence is present(Quantifiers) [A-Za-z\d@$!%*?&]{8,} it for checking the password contains atleast 8 characters in (n,m) format. There is no upper limit */
    const password = "Password123!";
    const match = password.match(regEx);
    console.log(match);
}
validation();

/*  HTML tag validation */

function HTMLElements(str) {
    const tagPattern = /<\/?([a-z]+)[^>]*>/gi;
    const stack = [];
    const openTags = [];

    let match;
    while ((match = tagPattern.exec(str)) !== null) {
        const [fullMatch, tag] = match;
        if (fullMatch.startsWith("</")) {
            if (stack.length === 0 || stack[stack.length - 1] !== tag) {
                // Return the first problematic opening tag
                const errMessage = (stack.length === 0 ? openTags[0] : stack[stack.length - 1]);
                console.log(`Error on ${errMessage} tag`);
            }
            stack.pop();
        } else {
            stack.push(tag);
            openTags.push(tag);
        }
    }

    console.log(stack.length === 0 ? "No Error" : openTags[0]);

}
HTMLElements("<div><b><p>hello world</p></b><div>")