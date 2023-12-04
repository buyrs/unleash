/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ContextFieldSchema } from './contextFieldSchema';
import type { FeatureDependenciesSchema } from './featureDependenciesSchema';
import type { FeatureEnvironmentSchema } from './featureEnvironmentSchema';
import type { FeatureSchema } from './featureSchema';
import type { FeatureStrategySchema } from './featureStrategySchema';
import type { FeatureTagSchema } from './featureTagSchema';
import type { ExportResultSchemaSegmentsItem } from './exportResultSchemaSegmentsItem';
import type { TagTypeSchema } from './tagTypeSchema';

/**
 * The result of the export operation, providing you with the feature toggle definitions, strategy definitions and the rest of the elements relevant to the features (tags, environments etc.)
 */
export interface ExportResultSchema {
    /** A list of all the context fields that are in use by any of the strategies in the `featureStrategies` list. */
    contextFields?: ContextFieldSchema[];
    /** A list of all the dependencies for features in `features` list. */
    dependencies?: FeatureDependenciesSchema[];
    /** Environment-specific configuration for all the features in the `features` list. Includes data such as whether the feature is enabled in the selected export environment, whether there are any variants assigned, etc. */
    featureEnvironments?: FeatureEnvironmentSchema[];
    /** All the exported features. */
    features: FeatureSchema[];
    /** All strategy instances that are used by the exported features in the `features` list. */
    featureStrategies: FeatureStrategySchema[];
    /** A list of all the tags that have been applied to any of the features in the `features` list. */
    featureTags?: FeatureTagSchema[];
    /** A list of all the segments that are used by the strategies in the `featureStrategies` list. */
    segments?: ExportResultSchemaSegmentsItem[];
    /** A list of all of the tag types that are used in the `featureTags` list. */
    tagTypes: TagTypeSchema[];
}
