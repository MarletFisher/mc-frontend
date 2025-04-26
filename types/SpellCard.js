import CardForm from "./CardForm";

export default class SpellCard extends CardForm {
  constructor(...args) {
    super(...args);

    // spell card
    this.category = 2;
  }
}
