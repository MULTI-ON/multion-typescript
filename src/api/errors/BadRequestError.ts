/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as MultiOn from "..";

export class BadRequestError extends errors.MultiOnError {
    constructor(body: MultiOn.BadRequestResponse) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}