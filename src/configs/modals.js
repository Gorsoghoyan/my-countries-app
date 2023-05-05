
export const addCountryModal = {
  title: "Add country",
  btnText: "Add"
};

export const editCountryModal = {
  title: "Edit country",
  btnText: "Edit"
};

export const countryInputs = [
  { id: "_iasjd", type: "text", placeholder: "Country name", inpPlaceholder: "Enter country name", name: "name", special: "name" },
  { id: "_iasd3", type: "text", placeholder: "Capital", inpPlaceholder: "Enter capital name", name: "capital", special: "capital" },
  { id: "_i234r", type: "text", placeholder: "Region", inpPlaceholder: "Enter region name", name: "region" },
  { id: "_ghr3r4", type: "number", placeholder: "Area", inpPlaceholder: "Enter area size", name: "area" },
  { id: "_ghrh4", type: "number", placeholder: "Population", inpPlaceholder: "Enter population", name: "population" },
];

export const addSubUserModal = {
  title: "Add account",
  btnText: "Add"
};

export const editSubUserModal = {
  title: "Edit account",
  btnText: "Edit"
};

export const accountInputs = [
  { id: "_iasjd", type: "text", placeholder: "Username", inpPlaceholder: "Enter username", name: "displayName" },
  { id: "_i234r", type: "email", placeholder: "Email", inpPlaceholder: "Enter email address", name: "email" },
  { id: "_ghr3r4", type: "password", placeholder: "Password", inpPlaceholder: "Enter password", name: "password" },
];

export const permissions = [
  { id: "2j9h4", type: "checkbox", name: "add", text: "You want your sub-user to have permisson to add a country?" },
  { id: "2j95g", type: "checkbox", name: "edit", text: "You want your sub-user to have permisson to edit a country?" },
  { id: "asdaas", type: "checkbox", name: "select", text: "You want your sub-user to have permisson to select a country?" },
  { id: "asda3", type: "checkbox", name: "delete", text: "You want your sub-user to have permisson to delete a country?" },
];