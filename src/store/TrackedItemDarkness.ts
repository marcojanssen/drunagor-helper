export class TrackedItemDarkness {
  public id: string = "darkness";
  public runes: string[] = [];

  public addRune(rune: string) {
    this.runes.push(rune);
  }

  public removeRune() {}
}
