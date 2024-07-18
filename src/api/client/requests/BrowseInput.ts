/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MultiOn from "../../index";

/**
 * @example
 *     {
 *         cmd: "Find the top post on Hackernews.",
 *         url: "https://news.ycombinator.com/"
 *     }
 */
export interface BrowseInput {
    /** A specific natural language instruction for the agent to execute */
    cmd: string;
    /** The URL to start or continue browsing from. (Default: google.com) */
    url?: string;
    /** Boolean flag to indicate if session to be run locally or in the cloud (Default: False). If set to true, the session will be run locally via your chrome extension. If set to false, the session will be run in the cloud. */
    local?: boolean;
    /** Continues the session with session_id if provided. */
    sessionId?: string;
    /** Maximum number of steps to execute. (Default: 20) */
    maxSteps?: number;
    /** Boolean flag to include a screenshot of the final page. (Default: False) */
    includeScreenshot?: boolean;
    /** The temperature of model */
    temperature?: number;
    /** The agent id to use for the session. */
    agentId?: string;
    mode?: MultiOn.Mode;
    /** Boolean flag to use a proxy for the session (Default: False). Each Session gets a new Residential IP. */
    useProxy?: boolean;
}
