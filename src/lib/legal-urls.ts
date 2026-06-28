const ID_URL = import.meta.env.PUBLIC_ID_URL ?? "https://id.trucklinemp.com";

export const LEGAL_URLS = {
  termsOfService: `${ID_URL}/legal/terms_of_service`,
  rules: `${ID_URL}/legal/rules`,
  privacy: `${ID_URL}/legal/privacy_policy`,
  codeOfConduct: `${ID_URL}/legal/code_of_conduct`,
} as const;
