/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { DateSchema } from './dateSchema';
import type { FeatureEnvironmentMetricsSchemaVariants } from './featureEnvironmentMetricsSchemaVariants';

/**
 * How many times `feautreName` was evaluated to `true` (yes) and `false` (no) for `appName` in `environmnet`
 */
export interface FeatureEnvironmentMetricsSchema {
    /** The name of the feature */
    featureName?: string;
    /** The name of the application the SDK is being used in */
    appName?: string;
    /** Which environment the SDK is being used in */
    environment: string;
    /** The start of the time window these metrics are valid for. The window is usually 1 hour wide */
    timestamp: DateSchema;
    /** How many times the toggle evaluated to true */
    yes: number;
    /** How many times the toggle evaluated to false */
    no: number;
    /** How many times each variant was returned */
    variants?: FeatureEnvironmentMetricsSchemaVariants;
}
