export type Pet = {
  id: number,
  name: string,
  species: string,
  breed: string,
  age: number
  adopted: boolean,
  intakeDate: Date,
  adoptionDate?: Date,
  medicalRecord: {
    vaccinations: string[],
    weightKg: number,
    microchipId: string | null
  },
  photo: string

}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Jack",
    species: "dog",
    breed: "Border Collie",
    age: 20,
    adopted: true,
    intakeDate: new Date("2024-06-15"),
    adoptionDate: new Date("2024-09-25"),
    medicalRecord: {
      vaccinations: ["Rabies", "Distemper"],
      weightKg: 18.4,
      microchipId: null
    },
    photo: "jack-border-collie.jpg"
  },
  {
    id: 2,
    name: "Luna",
    species: "cat",
    breed: "Siamese",
    age: 3,
    adopted: true,
    intakeDate: new Date("2024-03-22"),
    medicalRecord: {
      vaccinations: ["Rabies", "FVRCP"],
      weightKg: 4.2,
      microchipId: "9851120045321"
    },
    photo: "luna-siamese.jpg"
  },
  {
    id: 3,
    name: "Max",
    species: "dog",
    breed: "German Shepherd",
    age: 5,
    adopted: false,
    intakeDate: new Date("2025-01-10"),
    medicalRecord: {
      vaccinations: ["Rabies", "DHPP", "Bordetella"],
      weightKg: 34.1,
      microchipId: "9851120077482"
    },
    photo: "max-german-shepherd.jpg"
  },
  {
    id: 4,
    name: "Cleo",
    species: "cat",
    breed: "Maine Coon",
    age: 2,
    adopted: true,
    intakeDate: new Date("2024-11-05"),
    medicalRecord: {
      vaccinations: ["Rabies", "FVRCP"],
      weightKg: 6.8,
      microchipId: null
    },
    photo: "cleo-maine-coon.jpg"
  },
  {
    id: 5,
    name: "Buddy",
    species: "dog",
    breed: "Golden Retriever",
    age: 7,
    adopted: true,
    intakeDate: new Date("2023-08-19"),
    medicalRecord: {
      vaccinations: ["Rabies", "DHPP"],
      weightKg: 31.5,
      microchipId: "9851120099103"
    },
    photo: "buddy-golden-retriever.jpg"
  },
  {
    id: 6,
    name: "Milo",
    species: "rabbit",
    breed: "Holland Lop",
    age: 1,
    adopted: false,
    intakeDate: new Date("2025-04-02"),
    adoptionDate: new Date("2025-04-09"),
    medicalRecord: {
      vaccinations: ["RHDV2"],
      weightKg: 1.8,
      microchipId: null
    },
    photo: "milo-holland-lop.jpg"
  },
  {
    id: 7,
    name: "Daisy",
    species: "dog",
    breed: "Beagle",
    age: 4,
    adopted: true,
    intakeDate: new Date("2024-09-30"),
    medicalRecord: {
      vaccinations: ["Rabies", "DHPP", "Leptospirosis"],
      weightKg: 12.3,
      microchipId: "9851120033219"
    },
    photo: "daisy-beagle.jpg"
  },
  {
    id: 8,
    name: "Shadow",
    species: "cat",
    breed: "Domestic Shorthair",
    age: 8,
    adopted: false,
    intakeDate: new Date("2025-06-14"),
    medicalRecord: {
      vaccinations: ["Rabies", "FVRCP", "FeLV"],
      weightKg: 5.1,
      microchipId: "9851120055678"
    },
    photo: "shadow-domestic-shorthair.jpg"
  },
  {
    id: 9,
    name: "Rocky",
    species: "dog",
    breed: "Boxer",
    age: 3,
    adopted: true,
    intakeDate: new Date("2024-02-08"),
    adoptionDate: new Date("2025-01-01"),
    medicalRecord: {
      vaccinations: ["Rabies", "DHPP"],
      weightKg: 28.7,
      microchipId: null
    },
    photo: "rocky-boxer.jpg"
  },
  {
    id: 10,
    name: "Nala",
    species: "cat",
    breed: "Ragdoll",
    age: 1,
    adopted: true,
    intakeDate: new Date("2025-03-17"),
    medicalRecord: {
      vaccinations: ["Rabies", "FVRCP"],
      weightKg: 3.9,
      microchipId: "9851120088456"
    },
    photo: "nala-ragdoll.jpg"
  },
  {
    id: 11,
    name: "Cooper",
    species: "dog",
    breed: "Australian Shepherd",
    age: 6,
    adopted: false,
    intakeDate: new Date("2025-07-21"),
    medicalRecord: {
      vaccinations: ["Rabies", "DHPP", "Bordetella"],
      weightKg: 24.2,
      microchipId: "9851120011234"
    },
    photo: "cooper-australian-shepherd.jpg"
  },
  {
    id: 12,
    name: "Willow",
    species: "rabbit",
    breed: "Netherland Dwarf",
    age: 2,
    adopted: true,
    intakeDate: new Date("2024-12-01"),
    medicalRecord: {
      vaccinations: ["RHDV2"],
      weightKg: 1.1,
      microchipId: null
    },
    photo: "willow-netherland-dwarf.jpg"
  },
  {
    id: 13,
    name: "Zeus",
    species: "dog",
    breed: "Great Dane",
    age: 2,
    adopted: true,
    intakeDate: new Date("2025-05-11"),
    medicalRecord: {
      vaccinations: ["Rabies", "DHPP"],
      weightKg: 58.6,
      microchipId: "9851120066789"
    },
    photo: "zeus-great-dane.jpg"
  },
  {
    id: 14,
    name: "Pumpkin",
    species: "cat",
    breed: "Persian",
    age: 4,
    adopted: false,
    intakeDate: new Date("2025-08-03"),
    adoptionDate: new Date("2025-10-25"),
    medicalRecord: {
      vaccinations: ["Rabies", "FVRCP"],
      weightKg: 4.7,
      microchipId: "9851120022345"
    },
    photo: "pumpkin-persian.jpg"
  },
  {
    id: 15,
    name: "Scout",
    species: "dog",
    breed: "Corgi",
    age: 5,
    adopted: true,
    intakeDate: new Date("2024-10-25"),
    medicalRecord: {
      vaccinations: ["Rabies", "DHPP", "Leptospirosis"],
      weightKg: 13.8,
      microchipId: null
    },
    photo: "scout-corgi.jpg"
  }
];
