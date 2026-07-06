// Representa la forma del personaje tal como lo devuelve la Rick and Morty API.
// Solo incluye los campos que el componente necesita mostrar (no el objeto completo).
export interface Character {
  name: string;
  status: string;    // "Alive", "Dead" o "unknown"
  species: string;   // "Human", "Alien", etc.
  image: string;     // URL de la imagen del personaje
}

// Valor vacío de Character, útil como estado inicial o en tests
// para evitar valores undefined cuando aún no llegó la respuesta.
export const EmptyCharacter: Character = {
  name: '',
  status: '',
  species: '',
  image: '',
};