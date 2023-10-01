const moment = require("moment");

class Shop {
  constructor(lagmon, cola, non) {
    this.lagmon = lagmon;
    this.cola = cola;
    this.non = non;
  }

  shopQoldiq() {
    console.log(
      `Hozir ${moment().format("HH:mm")}da ${this.non}ta non,  ${
        this.cola
      }ta cola va ${this.lagmon}ta lagmon mavjud!`
    );
  }

  shopQabul(cola, soni) {
    if (cola === "cola") this.cola += soni;
    console.log(
      `Hozir ${moment().format("HH:mm")}da ${soni}ta cola olib kelindi va ${this.cola}ta cola bo'ldi!`
    );
  }

  shopSotish(non, soni) {
    if (non === "non") this.non -= soni;

    console.log(
      `Hozir ${moment().format("HH:mm")}da ${soni}ta non sotildi va ${
        this.non
      }ta non qoldi!`
    );
  }
}

const shop = new Shop(4, 5, 10);

shop.shopQoldiq();
shop.shopQabul("cola", 5);
shop.shopSotish("non", 3);

setTimeout(() => {
  shop.shopQoldiq();
}, 60000);
