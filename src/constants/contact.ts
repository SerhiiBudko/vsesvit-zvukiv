/**
 * Single source of truth for all contact details shown on the site.
 *
 * Phone numbers, addresses and social links used to be hardcoded in six
 * different files, which is how a placeholder number ended up live on both
 * pricing pages. Import from here instead of retyping.
 */

export const CITY = "Кривий Ріг";

export const PHONES = [
  { href: "tel:+380987196649", label: "+380-98-719-66-49" },
  { href: "tel:+380672101516", label: "+380-67-210-15-16" },
] as const;

/** Primary number for single-number call-to-action buttons. */
export const PRIMARY_PHONE = PHONES[0];

export const EMAIL = {
  href: "mailto:budko79t@gmail.com",
  label: "budko79t@gmail.com",
} as const;

export const SOCIALS = {
  instagram: "https://www.instagram.com/vsesvit_zvukiv/",
  facebook: "https://www.facebook.com/tetana.budko.2025",
} as const;

type Location = {
  /** Short name of the facility. */
  name: string;
  /** Street address without the city. */
  street: string;
  /** Full address including the city. */
  full: string;
  /** Google Maps URL for opening directions in a new tab. */
  mapLinkUrl: string;
};

function makeLocation(name: string, street: string): Location {
  const full = `${street}, ${CITY}`;
  const query = encodeURIComponent(full);
  return {
    name,
    street,
    full,
    mapLinkUrl: `https://www.google.com/maps?q=${query}`,
  };
}

export const KINDERGARTEN = makeLocation(
  "Дитячий садок",
  "Проспект Університетський 51",
);

export const CORRECTIONAL_CLUB = makeLocation(
  "Корекційний клуб",
  "просп.Центральний (Лермонтова), 16",
);

export const LOCATIONS = [KINDERGARTEN, CORRECTIONAL_CLUB] as const;

/** Used for SEO metadata and social share cards. */
export const SITE = {
  name: "Всесвіт Звуків",
  url: "https://www.vsesvit-zvukiv.com.ua",
  description:
    "Дитячий садок та корекційний клуб «Всесвіт Звуків» у Кривому Розі. " +
    "Логопедичні заняття, корекція мовлення та розвиток дітей з досвідченими фахівцями.",
} as const;
