export class ColorPicker {
  private colors: string[];

  constructor() {
    this.colors = ["orange", "red", "violet", "blue", "green"];
  }

  public getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }

  public getColorsByIndex(index: number): string {
    return this.colors[index];
  }
}
