import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'; // Corrected import
import { apiVersion, dataset, projectId } from '../env';

// Initialize Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you're generating pages statically
});

// Initialize the image URL builder
const builder = createImageUrlBuilder(client);

// Utility function to build image URLs
export const urlFor = (source: { _type: string; asset: { _ref: string } }) =>
  builder.image(source);
