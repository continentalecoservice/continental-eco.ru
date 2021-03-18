import { createContext } from "react";

export const ServiceContext = createContext();

export const ServiceNames = {
  Desinfection: 'isDesinfection',
  Deratization: 'isDeratization',
  Disinsection: 'isDisinsection',
}

export const initialServicesState = {
  [ServiceNames.Desinfection]: true,
  [ServiceNames.Deratization]: false,
  [ServiceNames.Disinsection]: false,
}