export const usePatientList = () => {
  const Genders = [{display: 'MALE'}, {display: 'FEMALE'}, {display: 'OTHERS'}];

  const AgeRange = [
    {
      display: '0-10',
      maxAge: 10,
      minAge: 0,
    },
    {
      display: '10-20',
      maxAge: 20,
      minAge: 10,
    },
    {
      display: '20-30',
      maxAge: 30,
      minAge: 20,
    },
    {
      display: '30-40',
      maxAge: 40,
      minAge: 30,
    },
    {
      display: '40-50',
      maxAge: 50,
      minAge: 40,
    },
    {
      display: '50-60',
      maxAge: 60,
      minAge: 50,
    },
    {
      display: '60-70',
      maxAge: 70,
      minAge: 60,
    },
    {
      display: '70-80',
      maxAge: 80,
      minAge: 70,
    },
    {
      display: 'Above 80',
      maxAge: 120,
      minAge: 80,
    },
  ];

  return {Genders, AgeRange};
};
