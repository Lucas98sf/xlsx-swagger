import { HttpVerb } from './helpers';

export interface Path {
  api: string;
  verb: HttpVerb;
  summary: string;
  description: string;
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
  ref: string; // FIXME usar apenas ref?
  status?: number; // TODO adicionar no excel
}

interface PathTags {
  api: string;
  verb: HttpVerb;
  tag: string; // FIXME deveria ser 'tag'?
}

interface PathRequestBody {
  api: string;
  verb: HttpVerb;
  ref: string;
}

interface PathParameter {
  api: string;
  verb: HttpVerb;
  ref: string;
}
