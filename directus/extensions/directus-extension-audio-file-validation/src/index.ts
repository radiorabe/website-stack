import { defineHook } from "@directus/extensions-sdk";
import { FailedValidationError } from "@directus/validation";

const audioTypes = [
  "audio/wav",
  "audio/webm",
  "audio/aac",
  "audio/ogg",
  "audio/mpeg",
];

export default defineHook(async ({ filter }, { services, getSchema }) => {
  const { FilesService } = services;

  const filesService = new FilesService({
    schema: await getSchema(),
  });

  // filter("items.create", async (input, { collection }) => {
  const filterHandler = async (payload) => {
    // console.log("payload", payload);

    if (payload.audio) {
      const file = await filesService.readOne(payload.audio);
      // console.log("file", file);

      if (!audioTypes.includes(file.type)) {
        if (file.folder === "830d2c33-95c3-4b2e-b677-a0b1e1cfee5a") {
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
});
