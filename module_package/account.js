const moment = require("moment");


class Account{
    #amount;
    #account_id;

    constructor(name, amount, account_id){
        this.name=name;
        this.#amount=amount;
        this.#account_id=account_id;
    }

    tellMeBalance(){
        console.log(`Sizning hisobingizdagi qoldiq:${this.#amount}`);
        return this.#amount;
    }

    withdrawMoney(amount){
        if(this.#amount>amount){
            this.#amount-=amount;
            console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}`);
        } else{
            console.log(`Sizning balansingizdangi pul yetarli emas:${this.#amount}`);
        }
    }

    makeDeposit(amount){
        this.#amount+=amount;
        console.log(`Hisobingiz to'ldirildi, hisobingiz ${this.#amount}$ tashkil qiladi`);
    }

    giveMeDetails(){
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}`);
        console.log(`Hisob raqamingiz: ${this.#account_id}`);
    }

    static tellMeAboutClass(){
        console.log("Bu class acountlarni yasash uchun hizmat qiladi");
    }

    static tellMeTime(){
        console.log(`Hozirgi vaqt ${moment().format('YYYY MM DD HH:mm:ss')}`);
    }

}

module.exports=Account