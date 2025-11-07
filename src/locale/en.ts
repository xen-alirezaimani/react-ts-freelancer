export const en = {
  hello: "hello world!",
  auth: {
    login: {
      login: "Login",
      phoneNumber: "Phone",
      phoneNumberPlaceholder: "Enter Phone Number",
      SubmitButton: "Send",
      warning: "Dear user, due to backend limitations, please use valid Iranian phone numbers to avoid errors.",
      validateMessage: {
        emptyNumber: "Phone requirement",
        invalid: "Numbeer is invalid",
      },
    },
    completeProfile: {
      fields: {
        name: {
          label: "ّFull Name",
          validateMessage: {
            empty: "Name cannot be empty",
            cantStartNumber: "Name cannot start with a number",
          },
        },
        email: {
          label: "Email",
          validateMessage: {
            empty: "Email cannot be empty",
            invalid: "Please enter a valid email address",
          },
        },
      },
      roles: {
        owner: "Owner",
        freelancer: "Freelancer",
        admin: "Admin",
      },
    },
  },
  countries: {
    countryNames: {
      IR: "Iran",
      US: "United States",
      GB: "United Kingdom",
    },
  },
};
