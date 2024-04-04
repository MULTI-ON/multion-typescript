/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MultiOn from "../../api";
import * as core from "../../core";

export const ValidationErrorLocItem: core.serialization.Schema<
    serializers.ValidationErrorLocItem.Raw,
    MultiOn.ValidationErrorLocItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace ValidationErrorLocItem {
    type Raw = string | number;
}
