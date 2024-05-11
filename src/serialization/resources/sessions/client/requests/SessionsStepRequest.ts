/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as MultiOn from "../../../../../api/index";
import * as core from "../../../../../core";
import { SessionsStepRequestBrowserParams } from "../../types/SessionsStepRequestBrowserParams";
import { OptionalParams } from "../../../../types/OptionalParams";

export const SessionsStepRequest: core.serialization.Schema<
    serializers.SessionsStepRequest.Raw,
    MultiOn.SessionsStepRequest
> = core.serialization.object({
    cmd: core.serialization.string(),
    url: core.serialization.string().optional(),
    browserParams: core.serialization.property("browser_params", SessionsStepRequestBrowserParams.optional()),
    optionalParams: core.serialization.property("optional_params", OptionalParams.optional()),
    includeScreenshot: core.serialization.property("include_screenshot", core.serialization.boolean().optional()),
});

export declare namespace SessionsStepRequest {
    interface Raw {
        cmd: string;
        url?: string | null;
        browser_params?: SessionsStepRequestBrowserParams.Raw | null;
        optional_params?: OptionalParams.Raw | null;
        include_screenshot?: boolean | null;
    }
}
