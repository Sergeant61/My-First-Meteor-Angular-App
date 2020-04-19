import { IIsMakinesi } from 'imports/interfaces/IIsMakinesi';

export class IsMakinesi implements IIsMakinesi {
  _id: string;
  plaka: string;
  makineCinsi: string;
  motorSaati: string;
  createdAt: Date;

  constructor(plaka: string) {
    this.plaka = plaka;
  }

}
