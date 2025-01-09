// copy this array from ../directus_config/collections/flows.json (somehow not possiible to load diretly with types)
const collections = [
  "page_agb",
  "page_contact",
  "page_impressum",
  "page_team",
  "party_tips",
  "posts",
  "posts_directus_users_1",
  "programs",
  "directus_users",
  "page_history",
  "page_history_protocol",
  "page_contact_files",
  "member_product",
  "page_member",
  "page_program",
  "page_receive",
  "protocol",
  "events",
  "events_files",
  "page_join",
  "post",
  "page_classes",
  "page_home",
  "page_internship",
  "page_programs",
] as const;

function createObject<T extends readonly string[]>(
  steps: T
): Record<T[number], string> {
  const typed = {} as Record<string, string>;
  steps.forEach((step) => (typed[step] = step));
  return typed as unknown as Record<T[number], string>;
}

export default { collections: createObject(collections) };
