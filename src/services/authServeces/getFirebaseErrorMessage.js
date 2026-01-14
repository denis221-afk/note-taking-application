import { firebaseAuthErrors } from "../../database/firebaseErrors";

export function getFirebaseErrorMessage(error) {
  return firebaseAuthErrors[error];
}
