/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MultiOn from "../../api/index";
import * as core from "../../core";

export const SessionCreated: core.serialization.ObjectSchema<serializers.SessionCreated.Raw, MultiOn.SessionCreated> =
    core.serialization.object({
        status: core.serialization.string(),
        message: core.serialization.string(),
        sessionId: core.serialization.property("session_id", core.serialization.string()),
        url: core.serialization.string(),
        screenshot: core.serialization.string(),
    });

export declare namespace SessionCreated {
    interface Raw {
        status: string;
        message: string;
        session_id: string;
        url: string;
        screenshot: string;
    }
}
