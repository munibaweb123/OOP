import inquirer from "inquirer";
import chalk from 'chalk';
class person {
    _personality;
    constructor() {
        this._personality = 'Mystery';
    }
    userinput(input) {
        if (input.includes('talk to others about youself')) {
            this._personality = 'talk Happly';
        }
        else if (input.includes('keep quiet and keep your words to yourself')) {
            this._personality = 'talk Rude';
        }
    }
    get personality() {
        return this._personality;
    }
}
class main {
    async main() {
        const ans = await inquirer.prompt([{
                name: "ask",
                type: "list",
                message: chalk.yellow("what is your behaviour?"),
                choices: ['1- talk to others about myself',
                    '2: keep quiet and don\'t ask questions']
            }]);
        let myPerson = new person();
        myPerson.userinput(ans.ask);
        console.log(`you are ${myPerson.personality}`);
    }
}
const myObj = new main();
myObj.main();
