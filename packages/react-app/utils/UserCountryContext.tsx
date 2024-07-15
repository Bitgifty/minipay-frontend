import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types
interface SupportedCountries {
  country: string;
  currency: string;
  flag: string;
  ticker: string;
  countryCode: string;
  cashback: string;
}

type UserCountryContextType = {
  userCountry: string;
  setUserCountry: (value: string) => void;
  userCountryCode: string;
  setUserCountryCode: (value: string) => void;
  userCurrency: string; // Added for consistency
  setCurrency: (value: string) => void; // Corrected for setting user's currency
  userCurrencyTicker: string;
  setUserCurrencyTicker: (value: string) => void;
  supportedCountries: SupportedCountries[];
  setSupportedCountries: (value: SupportedCountries[]) => void; // Corrected type for setting the entire list
  cashback: string;
  setCashback: (value: string) => void;
};

// Create the context
const UserCountryContext = createContext<UserCountryContextType | undefined>(undefined);

// Custom hook to consume the context
export const useUserCountry = () => {
  const context = useContext(UserCountryContext);
  if (!context) {
    throw new Error('useUserCountry must be used within a UserCountryProvider');
  }
  return context;
};

// Provider component
export const UserCountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userCountry, setUserCountry] = useState<string>('');
  const [userCurrency, setCurrency] = useState<string>(''); // Corrected to match the type
  const [userCurrencyTicker, setUserCurrencyTicker] = useState<string>('');
  const [userCountryCode, setUserCountryCode] = useState<string>('');
  const [cashback, setCashback] = useState<string>('');

  const [supportedCountries, setSupportedCountries] = useState<SupportedCountries[]>([
    { country: "NG", currency: "NGN", flag: "🇳🇬", ticker: "₦", countryCode: "+234", cashback: "1500" },
    { country: "GH", currency: "GHS", flag: "🇬🇭", ticker: "₵", countryCode: "+233", cashback: "15" },
    { country: "KE", currency: "KES", flag: "🇰🇪", ticker: "KSh", countryCode: "+254", cashback: "150" },
    { country: "ZA", currency: "ZAR", flag: "🇿🇦", ticker: "R", countryCode: "+27", cashback: "19" }, // South Africa
    { country: "UG", currency: "UGX", flag: "🇺🇬", ticker: "USh", countryCode: "+256", cashback: "3700" }  // Uganda
  ]);

  useEffect(() => {
    const fetchUserCountry = () => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const city = timeZone.split("/")[1];
      let country = "NG"; // Default
      let currency = "NGN"; // Default
      let ticker = "₦";
      let countryCode = "+234";
      let cb = "1500";

      switch (city) {
        case "Lagos":
          country = "NG";
          currency = "NGN";
          ticker = "₦";
          countryCode = "+234";
          cb = "1500";
          break;

        case "Accra":
          country = "GH";
          currency = "GHS";
          ticker = "₵";
          countryCode = "+233";
          cb = "15";
          break;

        case "Nairobi":
          country = "KE";
          currency = "KES";
          ticker = "KSh";
          countryCode = "+254";
          cb = "150";
          break;

        case "Johannesburg":
        case "Cape_Town":
        case "Durban":
          country = "ZA";
          currency = "ZAR";
          ticker = "R";
          countryCode = "+27";
          cb = "200";
          break;

        case "Kampala":
          country = "UG";
          currency = "UGX";
          ticker = "USh";
          countryCode = "+256";
          cb = "500";
          break;

        default:
          country = "NG";
          currency = "NGN";
          ticker = "₦";
          countryCode = "+234";
          cb = "1500";
      }

      setUserCountry(country);
      setCurrency(currency);
      setUserCurrencyTicker(ticker);
      setUserCountryCode(countryCode);
      setCashback(cb);
    };

    fetchUserCountry();
  }, []);

  return (
    <UserCountryContext.Provider value={{ userCountry, setUserCountry, userCountryCode, setUserCountryCode, userCurrency, setCurrency, userCurrencyTicker, setUserCurrencyTicker, supportedCountries, setSupportedCountries, cashback, setCashback }}>
      {children}
    </UserCountryContext.Provider>
  );
};
