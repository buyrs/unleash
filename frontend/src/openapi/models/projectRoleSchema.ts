/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * An overview of how many users and groups are mapped to the specified project with the specified role.
 */
export interface ProjectRoleSchema {
    /** Number of groups mapped to this project. */
    groupCount?: number;
    /** The id of the project user and group count are counted for. */
    project: string;
    /** Id of the role the user and group count are counted for. */
    role?: number;
    /** Number of service accounts mapped to this project. */
    serviceAccountCount?: number;
    /** Number of users mapped to this project. */
    userCount?: number;
}
