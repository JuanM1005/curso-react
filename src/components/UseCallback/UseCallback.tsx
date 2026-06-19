import { memo, useCallback, useState } from 'react';
import type { Contact, ContactProps } from './UseCallback.types';
import { INITIAL_DATA } from './data/contact.data';

export const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando contacto: ${contact.name}`);

  return (
    <article className="flex flex-col items-    center justify-center gap-3">
      <div className="bg-blue-100 border border-blue-500 rounded-2xl p-2 mb-4">
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>

        <button
          type="button"
          onClick={() => onCall(contact.name)}
          className="mt-2 bg-blue-600 text-white max-w-fit p-2 cursor-pointer rounded-lg"
        >
          Llamar
        </button>
      </div>
    </article>
  );
});

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>(INITIAL_DATA);
  const [log, setLog] = useState<string>('');

  const makeCall = useCallback(
    (name: string) => setLog(`Llamando a ${name}`),
    [],
  );

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    };

    setContacts((prevContact) => [...prevContact, newContact]);
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-white">
      <div className="flex gap-4 m-4 items-center justify-between">
        <h2 className="text-lg font-bold">Agenda de contacto</h2>
        <button
          type="button"
          className="bg-blue-600 text-white max-w-fit p-2 cursor-pointer rounded-lg"
          onClick={addContact}
        >
          Añadir contacto
        </button>
      </div>

      {log && (
        <div className="bg-blue-100 border border-blue-500 p-2 rounded-2xl mb-3">
          <span className="font-semibold">{log}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
        ))}
      </div>
    </div>
  );
};
