export type Country = {
  _id: string;
  country_name: string;
  country_capital: string;
  country_language: string;
  country_description: string;
  country_flag: string;
};
export type RootStackParamList = {
  AboutCountry: Country;
};
