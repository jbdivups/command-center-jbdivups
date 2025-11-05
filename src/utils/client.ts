import { Client, createClient } from '@osdk/client';
import { createConfidentialOauthClient } from '@osdk/oauth';

const client_id: string = import.meta.env.VITE_FOUNDRY_CLIENT_ID;
const url: string = 'https://localhost:5173/palantir';
const ontologyRid: string = 'ri.ontology.main.ontology.edaa35fb-249c-46c1-a249-e50595316d80';
const client_secret: string = import.meta.env.VITE_FOUNDRY_CLIENT_SECRET;
const scopes: string[] = [
  'api:use-ontologies-read',
  'api:use-ontologies-write',
  'api:use-aip-agents-read',
  'api:use-aip-agents-write',
  'api:use-mediasets-read',
  'api:use-mediasets-write'
];

const auth = createConfidentialOauthClient(client_id, client_secret, url, scopes);
export const client: Client = createClient(url, ontologyRid, auth);
