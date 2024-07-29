export class Cat {
  constructor(
    public id: number,
    public name: string,
    public breed: Breed,
    public hairLengthMM = 100,
  ) {}
}

export enum Breed {
  SIBERIAN = 'Siberian',
  SIAMESE = 'Siamese',
  MAINE_COON = 'Maine Coon',
}
