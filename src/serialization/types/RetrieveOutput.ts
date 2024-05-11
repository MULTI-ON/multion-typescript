/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MultiOn from "../../api/index";
import * as core from "../../core";

export const RetrieveOutput: core.serialization.ObjectSchema<serializers.RetrieveOutput.Raw, MultiOn.RetrieveOutput> =
    core.serialization.object({
        message: core.serialization.string(),
        url: core.serialization.string(),
        screenshot: core.serialization.string().optional(),
        sessionId: core.serialization.property("session_id", core.serialization.string().optional()),
        status: core.serialization.string(),
        nextPage: core.serialization.property("next_page", core.serialization.number().optional()),
        data: core.serialization.list(
            core.serialization.record(core.serialization.string(), core.serialization.unknown())
        ),
    });

export declare namespace RetrieveOutput {
    interface Raw {
        message: string;
        url: string;
        screenshot?: string | null;
        session_id?: string | null;
        status: string;
        next_page?: number | null;
        data: Record<string, unknown>[];
    }
}
