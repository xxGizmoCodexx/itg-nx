import { BaseError } from './base.error';

export class ArgumentError extends BaseError {
  constructor(message?: string) {
    const trueProto: any = new.target.prototype;
    super();

    this.__proto__ = trueProto;
  }
}
