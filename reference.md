## Browse

<details><summary> <code>client.<a href="./src/Client.ts">browse</a>({ ...params }) -> MultiOn.BrowseOutput</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Allows for browsing the web using detailed natural language commands.

The function supports multi-step command execution based on the `CONTINUE` status of the Agent.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.browse({
    cmd: "Find the top post on Hackernews.",
    url: "https://news.ycombinator.com/",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `MultiOn.BrowseInput`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `MultiOnClient.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Retrieve

<details><summary> <code>client.<a href="./src/Client.ts">retrieve</a>({ ...params }) -> MultiOn.RetrieveOutput</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve data from webpage based on a url and natural language command that guides agents data extraction process.

The function can create a new session or be used as part of a session.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.retrieve({
    cmd: "Find the top post on Hackernews and get its title and points.",
    url: "https://news.ycombinator.com/",
    fields: ["title", "points"],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `MultiOn.RetrieveInput`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `MultiOnClient.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Sessions

<details><summary> <code>client.sessions.<a href="./src/api/resources/sessions/client/Client.ts">create</a>({ ...params }) -> MultiOn.SessionCreated</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates a new session and returns session details including a unique session ID. A session remains active for 10 minutes of inactivity.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.sessions.create({
    url: "url",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `MultiOn.CreateSessionInput`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sessions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>client.sessions.<a href="./src/api/resources/sessions/client/Client.ts">stepStream</a>(sessionId, { ...params }) -> core.Stream<MultiOn.SessionStepStreamChunk></code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Allows for browsing the web using detailed natural language instructions in a step mode for a session with a given session ID

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.sessions.stepStream("string", {
    cmd: "string",
    url: "string",
    browserParams: {
        height: 1.1,
        width: 1.1,
    },
    temperature: 1.1,
    agentId: "string",
    mode: MultiOn.Mode.Fast,
    includeScreenshot: true,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**sessionId: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `MultiOn.SessionsStepStreamRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sessions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>client.sessions.<a href="./src/api/resources/sessions/client/Client.ts">step</a>(sessionId, { ...params }) -> MultiOn.SessionStepSuccess</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Allows for browsing the web using detailed natural language instructions in a step mode for a session with a given session ID

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.sessions.step("session_id", {
    cmd: "cmd",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**sessionId: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `MultiOn.SessionsStepRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sessions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>client.sessions.<a href="./src/api/resources/sessions/client/Client.ts">close</a>(sessionId) -> MultiOn.SessionsCloseResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Closes the session.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.sessions.close("session_id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**sessionId: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sessions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>client.sessions.<a href="./src/api/resources/sessions/client/Client.ts">screenshot</a>(sessionId) -> MultiOn.SessionsScreenshotResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve the screenshot of the session.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.sessions.screenshot("session_id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**sessionId: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sessions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>client.sessions.<a href="./src/api/resources/sessions/client/Client.ts">list</a>() -> MultiOn.SessionsListResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve a list of active session IDs.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await client.sessions.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `Sessions.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
