import { defineHook } from "@directus/extensions-sdk";
import { FailedValidationError } from "@directus/validation";
// import { createError } from "@directus/errors";

const audioTypes = [
  "audio/wav",
  "audio/webm",
  "audio/aac",
  "audio/ogg",
  "audio/mpeg",
];

export default defineHook(async ({ filter }, { services, getSchema }) => {
  // const ForbiddenError = createError(
  //   "PRODUCTION_MODEL_FORBIDDEN",
  //   "No data model changes on production."
  // );

  const { FilesService } = services;

  const filesService = new FilesService({
    schema: await getSchema(),
  });

  // filter("items.create", async (input, { collection }) => {
  const filterHandler = async (payload) => {
    // console.log("payload", payload);

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
  filter("posts.items.create", filterHandler);
  filter("posts.items.update", filterHandler);

  /** Disallow model editing on production environments */
  // // if (process.env.NODE_ENV === "development") {
  // filter("items.create", () => {
  //   throw new ForbiddenError();
  // });
  // filter("items.update", () => {
  //   throw new ForbiddenError();
  // });
  // filter("items.delete", () => {
  //   throw new ForbiddenError();
  // });
  // filter("fields.create", () => {
  //   throw new ForbiddenError();
  // });
  // filter("fields.update", () => {
  //   throw new ForbiddenError();
  // });
  // filter("fields.delete", () => {
  //   throw new ForbiddenError();
  // });
  // // }
});
