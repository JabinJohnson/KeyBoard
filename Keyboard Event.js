const abc = "abcdefghijklmnopqstuvwxyz";
function retrieveRandom(){
    const random = Math.floor(Math.random() * abc.length);
    const special = abc[random];
    return special;
};
let secretLetter = retrieveRandom();
document.body.addEventListener('keyup', function(event){
    const key = event.key;
    console.log(key);
    // Get the character that was typed by the user
    // Compare the secret letter to the character typed by the user
    //if they're equal create "p" tag with the message and append it.
    if (secretLetter === key){
        const select = document.createElement("p");
        const node = document.createTextNode("SECRET KEY PRESSED");
        select.appendChild = (node);
        document.body.appendChild(select);
        secretLetter = retrieveRandom();
    }
});