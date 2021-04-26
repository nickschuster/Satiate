// Static class to generate keys for various
// form/display elements.
export class Keygen {
  static key = 0;
  static getKey() {
    return this.key++;
  }
}
