import type { Express, Request, Response } from "express";
import { Pet, pets } from "../data/pets";

type PetQueryParams = {
  species?: string,
  adopted?: 'true' | 'false',
  minAge?: 'string',
  maxAge? : 'string'
}

export const getPets = (
  req: Request<{}, unknown, {}, PetQueryParams>,
  res: Response<{length:number,data:Pet[]}|{message:string}>
): void => {
  const { species,adopted, minAge, maxAge } = req.query
  let filteredPets: Pet[] = pets


  if (species) {
    filteredPets = filteredPets.filter((p:Pet):Boolean => p.species.toLowerCase() === species?.toLowerCase())
  }

  if (adopted) {
    filteredPets = filteredPets.filter((p:Pet):Boolean => p.adopted === JSON.parse(adopted))
   }
  if (maxAge) {
     filteredPets = filteredPets.filter((p: Pet): Boolean => p.age <= Number(maxAge))
  }
  if (minAge) {
     filteredPets = filteredPets.filter((p: Pet): Boolean => p.age >= Number(maxAge))
  }

    res.status(200).json({length:filteredPets.length, data:filteredPets})
}

export const getPetById =  (
  req: Request<{ id: string }>,
  res: Response<Pet | { message: string }>
): void => {
  // const id = Number(req.params.id)
  // or
  const {id} = req.params //via destructuring
  // const pet = pets.find(p => p.id === id)
  // OR
  const pet: Pet | undefined = pets.find((p: Pet): boolean => p.id.toString() === id)
  if (pet) {
    res.status(200).json(pet)
  } else {
    res.status(404).json({message:"No pet with that ID"})
  }
}
