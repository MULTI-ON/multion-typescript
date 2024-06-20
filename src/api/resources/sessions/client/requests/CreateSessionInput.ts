/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MultiOn from "../../../../index";

/**
 * @example
 *     {
 *         url: "url"
 *     }
 *
 * @example
 *     {
 *         url: "url"
 *     }
 *
 * @example
 *     {
 *         url: "url"
 *     }
 */
export interface CreateSessionInput {
    /** The URL to create or continue session from. */
    url: string;
    /** Boolean flag to indicate if session to be run locally or in the cloud (Default: False). If set to true, the session will be run locally via your chrome extension. If set to false, the session will be run in the cloud. */
    local?: boolean;
    mode?: MultiOn.Mode;
    /** Boolean flag to use a proxy for the session (Default: False). Each Session gets a new Residential IP. */
    useProxy?: boolean;
    /** Object containing height and width for the browser screen size. */
    browserParams?: MultiOn.CreateSessionInputBrowserParams;
    includeScreenshot?: boolean;
}
