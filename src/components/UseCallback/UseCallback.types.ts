export interface Contact {
  id: number;
  name: string;
  phone: string;
}

export interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}
