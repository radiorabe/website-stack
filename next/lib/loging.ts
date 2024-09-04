export function logError(error) {
  if (error.error && error.error.errors) {
    console.log("Multiple errors:");
    console.log("error.error.errors", error.error);
    error.error.errors.forEach((error, index) => {
      console.log("error " + index + ":", error);
    });
  } else if (error.error) {
    console.log("error.error: ", error.error);
  } else {
    console.log("single error", error);
  }
}
