export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  * [Symbol.iterator]() {
    const members = [...this.members];
    for (const member of members) {
      yield member;
    }
  }
}
