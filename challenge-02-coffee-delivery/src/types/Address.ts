type AddressPaymentMethod= {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: 'credit' | 'debit' | 'cash';
}

export interface FormInputs extends AddressPaymentMethod {}