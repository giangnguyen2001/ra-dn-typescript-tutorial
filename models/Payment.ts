export interface Payment {
  provider: string;

  total: number;

  pay(): void;
}
