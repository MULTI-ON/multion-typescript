## Browse

<details><summary> <code>multiOn.<a href="./src/Client.ts">browse</a>({ ...params }) -> MultiOn.BrowseOutput</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Allows for browsing the web using detailed natural language instructions. The function supports multi-step command execution based on the `CONTINUE` status.

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
await multiOn.browse({
    cmd: "find the top post on hackernews",
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

## Sessions

<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">create</a>({ ...params }) -> MultiOn.SessionCreated</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates a new session and returns session details including a unique session ID.

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
await multiOn.sessions.create({
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

<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">stepStream</a>(sessionId, { ...params }) -> core.Stream<MultiOn.SessionStepStreamChunk></code> </summary>

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

<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">step</a>(sessionId, { ...params }) -> MultiOn.SessionStepSuccess</code> </summary>

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
await multiOn.sessions.step("session_id", {
    cmd: "cmd",
    stream: false,
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

<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">close</a>(sessionId) -> MultiOn.SessionsCloseResponse</code> </summary>

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
await multiOn.sessions.close("session_id");
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

<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">screenshot</a>(sessionId) -> MultiOn.SessionsScreenshotResponse</code> </summary>

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
await multiOn.sessions.screenshot("session_id");
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

<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">list</a>() -> MultiOn.SessionsListResponse</code> </summary>

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
await multiOn.sessions.list();
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
