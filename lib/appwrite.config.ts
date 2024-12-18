// import * as sdk from "node-appwrite";

import { Client, Databases, Messaging, Storage, Users } from "node-appwrite";

// Destructure and log environment variables
export const {
  NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_API_KEY: API_KEY,
  NEXT_PUBLIC_DATABASE_ID: DATABASE_ID,
  NEXT_PUBLIC_PATIENT_COLLECTION_ID: PATIENT_COLLECTION_ID,
  NEXT_PUBLIC_DOCTOR_COLLECTION_ID: DOCTOR_COLLECTION_ID,
  NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID: APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

const client = new Client();

client
  .setEndpoint(ENDPOINT!)
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!)
  .setSelfSigned(true);

export const databases = new Databases(client);
export const users = new Users(client);
export const messaging = new Messaging(client);
export const storage = new Storage(client);
