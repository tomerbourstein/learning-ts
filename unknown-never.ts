let entererdinput: unknown;
let username: string;

entererdinput = 5;

entererdinput = "Tomer";

if (typeof entererdinput === "string") {
  username = entererdinput;
  console.log(username);
}

function generateError(message: string, code: number): never {
  throw { errorMessage: message, errorCode: code };
}

generateError("Error", 500);
