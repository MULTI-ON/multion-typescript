/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         url: "url"
 *     }
 */
export interface BrowseInput {
    /** The command for the agent to carry out (Default: www.google.com) */
    cmd?: string;
    /** The URL to start or continue browsing from. */
    url: string;
    /** Boolean flag to indicate if session to be run locally or in the cloud (Default: False) */
    local?: boolean;
    sessionId?: string;
    /** Maximum number of steps to execute. (Default: 20) */
    maxSteps?: number;
    /** Boolean flag to stream results back to the client (Default: False) */
    stream?: boolean;
    includeScreenshot?: boolean;
}
