import { ReactNode, createContext, useState } from 'react';

interface DeliveryProps {
  cep: string;
  city: string;
  number: string;
  road: string;
  neighborhood: string;
  uf: string;
  payment: string;
  complement?: string | undefined;
}

interface DeliveryContextType {
  delivery: DeliveryProps[];
  getDeliveryDetails: (data: DeliveryProps) => void;
}

export const DeliveryContext = createContext({} as DeliveryContextType);

interface DeliveryContextProviderProps {
  children: ReactNode;
}

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const [delivery, setDelivery] = useState<DeliveryProps[] | any>([]);

  function getDeliveryDetails(data: DeliveryProps) {
    const deliveryData = {
      cep: data.cep,
      city: data.city,
      complement: data.complement,
      neighborhood: data.neighborhood,
      number: data.number,
      payment: data.payment,
      road: data.road,
      uf: data.uf,
    };

    setDelivery([deliveryData]);
  }

  return (
    <DeliveryContext.Provider value={{ delivery, getDeliveryDetails }}>
      {children}
    </DeliveryContext.Provider>
  );
}
