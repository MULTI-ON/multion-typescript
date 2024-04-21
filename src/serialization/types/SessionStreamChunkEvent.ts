/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MultiOn from "../../api/index";
import * as core from "../../core";
import { SessionStreamChunkEventData } from "./SessionStreamChunkEventData";

export const SessionStreamChunkEvent: core.serialization.ObjectSchema<
    serializers.SessionStreamChunkEvent.Raw,
    MultiOn.SessionStreamChunkEvent
> = core.serialization.object({
    data: SessionStreamChunkEventData,
    sessionId: core.serialization.property("session_id", core.serialization.string().optional()),
});

export declare namespace SessionStreamChunkEvent {
    interface Raw {
        data: SessionStreamChunkEventData.Raw;
        session_id?: string | null;
    }
}