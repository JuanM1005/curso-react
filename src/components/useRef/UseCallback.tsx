interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactProps {
    contact: Contact;
    onCall: (phone: string) => void;
}

export const ContactCard = ({ contact, onCall }: ContactProps) => {
    console.log(`Renderizando contacto ${contact.name}`);

    return (
        <article className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900">
                    {contact.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    {contact.phone}
                </p>
            </div>

            <button
                type="button"
                onClick={() => onCall(contact.phone)}
                className="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition cursor-pointer hover:bg-blue-700 active:scale-[0.98]"
            >
                Llamar
            </button>
        </article>
    );
};

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([{

    }])
}
