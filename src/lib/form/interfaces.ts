export interface FormControl {
  
}

export interface ValidatorSettings {
  controls: { [key: string]: FormControl };
  onSubmit: () => void | Promise<void>;
}
