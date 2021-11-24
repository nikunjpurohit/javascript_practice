console.log("this is tut28");

class Employee {
    constructor(name, experience, division, language){
    this.name = name,
    this.experience= experience,
    this.division=division,
    this.language = language
    }
    slogan(){
        return `I am ${this.name} and this is best`;
    }
    joininyear(){
        return 2021 - this.experience;
    }
    static add(a,b){
        return a + b;
    }

}

class Programmer extends Employee{
    constructor(name, experience, division, language, github){
        super(name, experience, division);
        this.language=language;
        this.github=github;
    }
    favLang(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }

    }
    static multiply(a, b){
        return a * b;
    }

}