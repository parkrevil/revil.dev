import Joi from 'joi';

type ValidationSchema = Joi.AnySchema | Joi.Reference;

export class FormGroup {
  constructor(public controls: { [key: string]: FormControl }) {}

  get valid(): boolean {
    return true;
  }
}

export class FormControl {
  private readonly validator: Joi.ObjectSchema;

  constructor(private _value: any, _validator: ValidationSchema) {
    this.validator = Joi.object({
      value: _validator,
    });
  }

  get value(): any {
    return this._value;
  }

  set value(val: any) {
    this._value = val;

    this.validate();
  }

  get valid() {
    return this._validator
  }

  private async validate() {
    await this.validator.validateAsync({ value: this._value }); 
  }
}
