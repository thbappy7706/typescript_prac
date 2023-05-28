// destructuring object alias

const language = {
    nameOfProgram: 'javascript',
    type: 'Full Stack Language',
    created: 1995
}

const {nameOfProgram: progName, created: invented} = language;

console.log(progName, invented)