import React, { useCallback, useMemo, useState } from 'react';
import { initialServicesState, ServiceContext, ServiceNames } from './const';

export const ServicesProvider = (
  {
    children
  }
) => {
  const [activeSection, setActiveSection] = useState(initialServicesState);

  const handleSectActiveSection = useCallback((serviceName) => {
    const sections = {
      [ServiceNames.Desinfection]: false,
      [ServiceNames.Deratization]: false,
      [ServiceNames.Disinsection]: false,
    };
    sections[serviceName] = true;
    setActiveSection(sections)
  }, []);

  const providerValue = useMemo(() => ({
    handleSectActiveSection,
    activeSection,
  }), [handleSectActiveSection, activeSection]);

  return (
    <ServiceContext.Provider value={providerValue}>
      { children}
    </ServiceContext.Provider>
  );
};
