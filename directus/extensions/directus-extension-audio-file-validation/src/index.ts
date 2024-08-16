import { defineHook } from "@directus/extensions-sdk";
import { InvalidPayloadError } from "@directus/errors";
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
    console.log("payload", payload);

    if (payload.audio) {
      const file = await filesService.readOne(payload.audio);
      console.log("file", file);

      if (!audioTypes.includes(file.type)) {
        throw new FailedValidationError({
          field: "audio",
          type: "eq",
          valid: audioTypes,
          // invalid?: number | string | (number | string)[];
          substring: "one of these types: [" + audioTypes.join(", ") + "]",
        });
        // throw new InvalidPayloadError({
        //   reason:
        //     "This file is not a supported audio file type. Please use one of these: " +
        //     audioTypes.join(", "),
        // });
      }
    }
  };
  filter("posts.items.create", filterHandler);
  filter("posts.items.update", filterHandler);
});
