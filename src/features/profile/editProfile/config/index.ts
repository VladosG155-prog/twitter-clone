export const userFields = [
  { fieldName: "name", placeholder: "Name" },
  { fieldName: "tel", placeholder: "Phone number" },
  { fieldName: "email", placeholder: "Email" },
  { fieldName: "bio", placeholder: "Bio" },
  { fieldName: "password", placeholder: "Password", type: "password" },
];

export const userDateFields: {
  fieldName: "month" | "day" | "year";
  placeholder: string;
}[] = [
  { fieldName: "month", placeholder: "Month" },
  { fieldName: "day", placeholder: "Day" },
  { fieldName: "year", placeholder: "Year" },
];
