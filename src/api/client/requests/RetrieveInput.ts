/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         cmd: "Find the top post on Hackernews and get its title and points.",
 *         url: "https://news.ycombinator.com/",
 *         fields: ["title", "points"]
 *     }
 *
 * @example
 *     {
 *         cmd: "Find the top post on Hackernews and get its title and points.",
 *         url: "https://news.ycombinator.com/",
 *         fields: ["title", "points"]
 *     }
 *
 * @example
 *     {
 *         cmd: "Find the top post on Hackernews and get its title and points.",
 *         url: "https://news.ycombinator.com/",
 *         fields: ["title", "points"]
 *     }
 */
export interface RetrieveInput {
    /** A specific natural language instruction on data the agent should extract. */
    cmd: string;
    /** The URL to create or continue session from. */
    url?: string;
    /** Continues the session with session_id if provided. */
    sessionId?: string;
    /** Boolean flag to indicate if session to be run locally or in the cloud (Default: False). If set to true, the session will be run locally via your chrome extension. If set to false, the session will be run in the cloud. */
    local?: boolean;
    /** List of fields (columns) to be outputted in data. */
    fields?: string[];
    /** Format of response data. (Default: json) */
    format?: "json";
    /** Maximum number of data items to retrieve. (Default: 100) */
    maxItems?: number;
    /** Flag to retrieve full page (Default: True). If set to false, the data will only be retrieved from the current session viewport. */
    fullPage?: boolean;
    /** Flag to include rich JS and ARIA elements in data retrieved. (Default: False) */
    renderJs?: boolean;
    /** Flag to scroll to the bottom of the page (Default: False). If set to true, the page will be scrolled to the bottom for a maximum of 5 seconds before data is retrieved. */
    scrollToBottom?: boolean;
    /** Flag to include a screenshot with the response. (Default: False) */
    includeScreenshot?: boolean;
}
