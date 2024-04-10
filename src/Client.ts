/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as MultiOn from "./api";
import * as serializers from "./serialization";
import urlJoin from "url-join";
import * as errors from "./errors";
import { Sessions } from "./api/resources/sessions/client/Client";

export declare namespace MultiOnClient {
    interface Options {
        environment?: core.Supplier<environments.MultiOnEnvironment | string>;
        apiKey: core.Supplier<string>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class MultiOnClient {
    constructor(protected readonly _options: MultiOnClient.Options) {}

    /**
     * Allows for browsing the web using detailed natural language instructions. The function supports multi-step command execution based on the `CONTINUE` status.
     * @throws {@link MultiOn.BadRequestError}
     * @throws {@link MultiOn.UnauthorizedError}
     * @throws {@link MultiOn.UnprocessableEntityError}
     * @throws {@link MultiOn.InternalServerError}
     *
     * @example
     *     await multiOn.browse({
     *         cmd: "find the top post on hackernews",
     *         url: "https://news.ycombinator.com/"
     *     })
     */
    public async browse(
        request: MultiOn.BrowseInput,
        requestOptions?: MultiOnClient.RequestOptions
    ): Promise<MultiOn.BrowseOutput> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MultiOnEnvironment.Default,
                "browse"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "multion",
                "X-Fern-SDK-Version": "1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.BrowseInput.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BrowseOutput.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new MultiOn.BadRequestError(
                        await serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new MultiOn.UnauthorizedError(
                        await serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new MultiOn.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MultiOn.InternalServerError(
                        await serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.MultiOnError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MultiOnError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MultiOnTimeoutError();
            case "unknown":
                throw new errors.MultiOnError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _sessions: Sessions | undefined;

    public get sessions(): Sessions {
        return (this._sessions ??= new Sessions(this._options));
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["MULTION_API_KEY"];
        return { X_MULTION_API_KEY: apiKeyValue };
    }
}
