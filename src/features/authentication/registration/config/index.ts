export const MONTHS = [
  { value: "0", label: "January" },
  { value: "1", label: "February" },
  { value: "2", label: "March" },
  { value: "3", label: "April" },
  { value: "4", label: "May" },
  { value: "5", label: "June" },
  { value: "6", label: "July" },
  { value: "7", label: "August" },
  { value: "8", label: "September" },
  { value: "9", label: "October" },
  { value: "10", label: "November" },
  { value: "11", label: "December" },
];

export const YEARS = Array.from({ length: 25 }, (_, index) => {
  const yearValue = 2024 - index;
  return { value: String(yearValue), label: String(yearValue) };
});

export const getDays = (month: string, year: string) => {
  const date = new Date(+year, +month + 1, 0).getDate();

  const options = [];
  for (let i = 0; i < date; i++) {
    const dayNumber = String(i + 1);
    options.push({ value: dayNumber, label: dayNumber });
  }

  return options;
};

export const userFields = [
  { fieldName: "name", placeholder: "Name" },
  { fieldName: "tel", placeholder: "Phone number" },
  { fieldName: "email", placeholder: "Email" },
  { fieldName: "password", placeholder: "Password" },
];

export const userDateFields: {
  fieldName: "month" | "day" | "year";
  placeholder: string;
}[] = [
  { fieldName: "month", placeholder: "Month" },
  { fieldName: "day", placeholder: "Day" },
  { fieldName: "year", placeholder: "Year" },
];
