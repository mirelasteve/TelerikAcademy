/*
We live in a modern time. Nowadays there is no need to speak to somebody, just so you can find out what s/he likes...

Bay Rik, the big Tele is a very respected principal of the village of Academovo. He wanted to introduce new technology and methods in his school. So, he decided he will do the following:

    Each guy and girl will list their interests
    Some smart guy/gal will write a program, to find the best match between a male person and a female person.
        Male-male and/or female-female matchings are TOO modern for Rik, so he didn't even think of putting 
        this is the requirements...
        Some people love their interest so much, that they have listed it multiple times. 
        In this case, the match is even stronger. See the explanation under sample test #2 for further clarity.
        If a there are two or more connections with the same number of matches, choose the first one 
        lexicographically based on the name of the guy.

You are the smart guy/gal. You task is to write the program, and print the maybe-to-be-couple.
Input

Read from the standard input

    On the first line, find the number N
        This is the number of people in the school
    On the next lines, you will find exactly N groups of four lines:
        The name of the person
        His gender
            'm' for male
            'f' for female
        The number M - the number of interests for this person
        Exactly M interests
            Separated by a comma (",")

Output

Print to the standard output

    On the single line of the output, print the found maybe-to-be-couple
        In the format "NAME_OF_THE_GUY and NAME_OF_THE_GAL have NUMBER_OF_COMMON_INTERESTS_ common interests!"
            Do not forget the exclamation mark at the end!!!


*/

const people = +gets();
const males = [];
const females = [];
for (let i = 0; i < people; i += 1) {
    let name = gets();
    let gender = gets();
    if (gender == 'm') {
        males.push(name);
        let n = +gets();
        let interests = gets().split(',');
        males.push(interests);
    } else {
        females.push(name);
        let n = +gets();
        let interests = gets().split(',');
        females.push(interests);
    }
}
let result = [];
let count = 0;
for (let i = 0; i < males.length; i += 2) {
    let name = males[i];
    let interests = males[i + 1];
    for (let j = 0; j < females.length; j += 2) {
        let fname = females[j];
        let fInterest = females[j + 1];

        for (let m = 0; m < interests.length; m += 1) {
            mI = interests[m];
            for (let f = 0; f < fInterest.length; f += 1) {
                if (mI == fInterest[f]) {
                    count += 1;
                    result[count] = name + ' and ' + fname + ' have ' + count + ' common interests!';
                }
            }

        }
        count = 0;
    }
}

print(result[result.length - 1]);
