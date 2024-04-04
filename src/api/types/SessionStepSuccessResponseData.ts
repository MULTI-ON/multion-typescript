/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SessionStepSuccessResponseData {
    /** The current status of the session. */
    status: string;
    /** A message providing more details about the session status. */
    message: string;
    /** The unique identifier for the session. */
    sessionId: string;
    /** The URL associated with the session. */
    url: string;
    /** A base64 encoded string of the screenshot, empty if not available. */
    screenshot: string;
}
