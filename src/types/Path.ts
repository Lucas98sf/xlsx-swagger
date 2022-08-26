import { HttpVerb, ParameterRef, ResponseRef, SchemaRef } from './helpers';

export interface Path {
  api: string;
  verb: HttpVerb;
  summary: string;
  description: string;
  operationId: string;
}

export interface PathData {
  'path-tags': PathTags[];
  'path-requestBody': PathRequestBody[];
  'path-parameters': PathParameter[];
  'path-responses': PathResponse[];
}

export type PathInfo = PathTags | PathRequestBody | PathParameter | PathResponse;

export interface PathResponse {
  api: string;
  verb: HttpVerb;
  $ref: ResponseRef;
  status?: number;
}

interface PathTags {
  api: string;
  verb: HttpVerb;
  tag: string;
}

export interface PathRequestBody {
  api: string;
  verb: HttpVerb;
  $ref: SchemaRef;
}

export interface PathParameter {
  api: string;
  verb: HttpVerb;
  $ref: ParameterRef;
}
