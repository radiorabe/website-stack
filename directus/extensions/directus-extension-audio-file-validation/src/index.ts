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

export default defineHook(async ({ filter }, { services, getSchema, env }) => {
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

      if (!audioTypes.includes(file.type)) {
        if (file.folder === env.AUDIO_FOLDER_ID) {
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

  const throwForbiddenError = async (payload, meta, ctx) => {
    // only SYNC_USER_ID user (admin) can edit on production
    if (
      ctx.accountability === null || // kind of a bug: https://github.com/directus/directus/discussions/13308
      ctx.accountability === undefined || // kind of a bug: https://github.com/directus/directus/discussions/13308
      !ctx.accountability.user || // kind of a bug: https://github.com/directus/directus/discussions/13308
      ctx.accountability.user === env.SYNC_USER_ID // or the only real admin
    ) {
      // All good nothing to do
    } else {
      throw new ForbiddenError();
    }
  };

  // how to know if the changes are comming from the sync command????????????? and not from hand?
  /** Disallow model editing on production environments */
  if (env.NODE_ENV !== "development") {
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
