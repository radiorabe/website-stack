import { defineHook } from "@directus/extensions-sdk";
import { FailedValidationError } from "@directus/validation";
import { createError } from "@directus/errors";

const audioTypes = [
  "audio/wav",
  "audio/webm",
  "audio/aac",
  "audio/ogg",
  "audio/mpeg",
];

export default defineHook(async ({ filter }, { services, getSchema }) => {
  const ForbiddenError = createError(
    "FORBIDDEN_PROD",
    "No direct changes on production."
  );

  const { FilesService } = services;

  const filesService = new FilesService({
    schema: await getSchema(),
  });

  // filter("items.create", async (input, { collection }) => {
  const audioFilterHandler = async (payload) => {
    if (payload.audio) {
      const file = await filesService.readOne(payload.audio);
      console.log("process.env.AUDIO_FOLDER_ID", process.env.AUDIO_FOLDER_ID);
      console.log("file", file);

      if (!audioTypes.includes(file.type)) {
        if (file.folder === process.env.AUDIO_FOLDER_ID) {
          await filesService.deleteOne(payload.audio);
        }
        throw new FailedValidationError({
          field: "audio",
          type: "eq",
          valid: audioTypes,
          substring: "one of these types: [" + audioTypes.join(", ") + "]",
        });
      }
    }
  };
  filter("posts.items.create", audioFilterHandler);
  filter("posts.items.update", audioFilterHandler);

  const throwForbiddenError = async (payload) => {
    throw new ForbiddenError();
  };

  /** Disallow model editing on production environments */
  if (process.env.NODE_ENV !== "development") {
    filter("collections.create", throwForbiddenError);
    filter("collections.update", throwForbiddenError);
    filter("collections.delete", throwForbiddenError);
    filter("fields.create", throwForbiddenError);
    filter("fields.update", throwForbiddenError);
    filter("fields.delete", throwForbiddenError);
    filter("policies.create", throwForbiddenError);
    filter("policies.update", throwForbiddenError);
    filter("policies.delete", throwForbiddenError);
  }
});
