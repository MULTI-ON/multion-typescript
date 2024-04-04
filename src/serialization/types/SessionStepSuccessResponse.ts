/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MultiOn from "../../api";
import * as core from "../../core";
import { SessionStepSuccessResponseData } from "./SessionStepSuccessResponseData";

export const SessionStepSuccessResponse: core.serialization.ObjectSchema<
    serializers.SessionStepSuccessResponse.Raw,
    MultiOn.SessionStepSuccessResponse
> = core.serialization.object({
    data: SessionStepSuccessResponseData,
    status: core.serialization.string(),
});

export declare namespace SessionStepSuccessResponse {
    interface Raw {
        data: SessionStepSuccessResponseData.Raw;
        status: string;
    }
}
