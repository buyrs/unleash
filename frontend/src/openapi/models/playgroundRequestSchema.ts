/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { PlaygroundRequestSchemaProjects } from './playgroundRequestSchemaProjects';
import type { SdkContextSchema } from './sdkContextSchema';

/**
 * Data for the playground API to evaluate toggles
 */
export interface PlaygroundRequestSchema {
    /** The environment to evaluate toggles in. */
    environment: string;
    /** A list of projects to check for toggles in. */
    projects?: PlaygroundRequestSchemaProjects;
    context: SdkContextSchema;
}
