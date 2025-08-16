export interface PersonalDetails {
  greeting: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  birthDate: Date;
  address: string;
}