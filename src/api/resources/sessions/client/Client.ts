/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as MultiOn from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as stream from "stream";

export declare namespace Sessions {
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

export class Sessions {
    constructor(protected readonly _options: Sessions.Options) {}

    /**
     * Creates a new session and returns session details including a unique session ID.
     * @throws {@link MultiOn.UnprocessableEntityError}
     *
     * @example
     *     await multiOn.sessions.create({
     *         url: "url"
     *     })
     */
    public async create(
        request: MultiOn.CreateSessionInput,
        requestOptions?: Sessions.RequestOptions
    ): Promise<MultiOn.SessionCreated> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MultiOnEnvironment.Default,
                "session"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "multion",
                "X-Fern-SDK-Version": "1.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.CreateSessionInput.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SessionCreated.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

    /**
     * Allows for browsing the web using detailed natural language instructions in a step mode for a session with a given session ID
     */
    public async stepStream(
        sessionId: string,
        request: MultiOn.SessionsStepStreamRequest,
        requestOptions?: Sessions.RequestOptions
    ): Promise<core.Stream<MultiOn.SessionStepStreamChunk>> {
        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MultiOnEnvironment.Default,
                `session/${sessionId}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "multion",
                "X-Fern-SDK-Version": "1.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: {
                ...(await serializers.SessionsStepStreamRequest.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                })),
                stream: true,
            },
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return await serializers.SessionStepStreamChunk.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                eventShape: {
                    type: "sse",
                    streamTerminator: "[DONE]",
                },
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

    /**
     * Allows for browsing the web using detailed natural language instructions in a step mode for a session with a given session ID
     * @throws {@link MultiOn.UnprocessableEntityError}
     *
     * @example
     *     await multiOn.sessions.step("session_id", {
     *         cmd: "cmd",
     *         stream: false
     *     })
     *
     * @example
     *     await multiOn.sessions.step("string", {
     *         cmd: "cmd",
     *         stream: false
     *     })
     */
    public async step(
        sessionId: string,
        request: MultiOn.SessionsStepRequest,
        requestOptions?: Sessions.RequestOptions
    ): Promise<MultiOn.SessionStepSuccess> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MultiOnEnvironment.Default,
                `session/${sessionId}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "multion",
                "X-Fern-SDK-Version": "1.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: {
                ...(await serializers.SessionsStepRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" })),
                stream: false,
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SessionStepSuccess.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

    /**
     * Closes the session.
     * @throws {@link MultiOn.UnprocessableEntityError}
     *
     * @example
     *     await multiOn.sessions.close("session_id")
     *
     * @example
     *     await multiOn.sessions.close("string")
     */
    public async close(
        sessionId: string,
        requestOptions?: Sessions.RequestOptions
    ): Promise<MultiOn.SessionsCloseResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MultiOnEnvironment.Default,
                `session/${sessionId}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "multion",
                "X-Fern-SDK-Version": "1.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SessionsCloseResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

    /**
     * Retrieve the screenshot of the session.
     * @throws {@link MultiOn.UnprocessableEntityError}
     *
     * @example
     *     await multiOn.sessions.screenshot("session_id")
     *
     * @example
     *     await multiOn.sessions.screenshot("string")
     */
    public async screenshot(
        sessionId: string,
        requestOptions?: Sessions.RequestOptions
    ): Promise<MultiOn.SessionsScreenshotResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MultiOnEnvironment.Default,
                `screenshot/${sessionId}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "multion",
                "X-Fern-SDK-Version": "1.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SessionsScreenshotResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

    /**
     * Retrieve a list of active session IDs.
     *
     * @example
     *     await multiOn.sessions.list()
     */
    public async list(requestOptions?: Sessions.RequestOptions): Promise<MultiOn.SessionsListResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MultiOnEnvironment.Default,
                "sessions"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "multion",
                "X-Fern-SDK-Version": "1.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SessionsListResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MultiOnError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["MULTION_API_KEY"];
        return { X_MULTION_API_KEY: apiKeyValue };
    }
}
