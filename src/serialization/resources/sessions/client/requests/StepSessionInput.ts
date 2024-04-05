/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as MultiOn from "../../../../../api";
import * as core from "../../../../../core";
import { StepSessionInputBrowserParams } from "../../types/StepSessionInputBrowserParams";

export const StepSessionInput: core.serialization.Schema<serializers.StepSessionInput.Raw, MultiOn.StepSessionInput> =
    core.serialization.object({
        cmd: core.serialization.string(),
        url: core.serialization.string().optional(),
        stream: core.serialization.boolean().optional(),
        browserParams: core.serialization.property("browser_params", StepSessionInputBrowserParams.optional()),
        includeScreenshot: core.serialization.property("include_screenshot", core.serialization.boolean().optional()),
    });

export declare namespace StepSessionInput {
    interface Raw {
        cmd: string;
        url?: string | null;
        stream?: boolean | null;
        browser_params?: StepSessionInputBrowserParams.Raw | null;
        include_screenshot?: boolean | null;
    }
}
