import { makeAutoObservable } from "mobx";

class State {
   owner = "e.g. Jane Allpeseed";
   cardNumber = "0000000000000000";
   cardMonth = "00";
   cardYear = "00";
   cvc = "000";
   cardInfo = {};

   constructor() {
      makeAutoObservable(this)
   }

   onOwnerChange(e) {
      this.owner = e.target.value;
   }

   onCardNumberChange(e) {
      this.cardNumber = e.target.value;
   }

   onCardMonthChange(e) {
      this.cardMonth = e.target.value;
   }

   onCardYearChange(e) {
      this.cardYear = e.target.value;
   }

   onCvcChange(e) {
      this.cvc = e.target.value;
   }

   onCardInfoSubmit(data) {
      console.log(data);
      this.cardInfo = data;
      this.owner = "e.g. Jane Allpeseed";
      this.cardNumber = "0000000000000000";
      this.cardMonth = "00";
      this.cardYear = "00";
      this.cvc = "000";
   }
}

export default new State();