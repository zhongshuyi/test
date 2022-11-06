let headerPattern = /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/g;
let type = "✨ feat(custom): 新增一个bug"

console.log(type.replace(headerPattern), (...match) => {
    let groups = match.pop();
    return `${groups.type}`;
});

// console.log(headerPattern.test(type))


// const personList = `First_Name: John, Last_Name: Doe
// First_Name: Jane, Last_Name: Smith`;

// const regexpNames = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/gm;
// for (const match of personList.matchAll(regexpNames)) {
//     console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
// }

