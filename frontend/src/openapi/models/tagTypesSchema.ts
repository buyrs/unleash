/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { TagTypeSchema } from './tagTypeSchema';

/**
 * A list of tag types with a version number representing the schema used to model the tag types.
 */
export interface TagTypesSchema {
    /** The list of tag types. */
    tagTypes: TagTypeSchema[];
    /** The version of the schema used to model the tag types. */
    version: number;
}
