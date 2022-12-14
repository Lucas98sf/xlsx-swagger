import SwaggerParser from '@apidevtools/swagger-parser';
import { OpenAPIV3 } from 'openapi-types';

export const validateOpenApiDocument = (document: OpenAPIV3.Document) =>
  SwaggerParser.validate(document, { resolve: { external: false } }, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
