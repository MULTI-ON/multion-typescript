
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
    cmd: "cmd",
    url: "url"
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
await multiOn.sessions.create({});
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


**request: `MultiOn.SessionInput`** 


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

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await multiOn.sessions.step("session_id", {});
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


**request: `MultiOn.SessionInput`** 


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


<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">clone</a>(sessionId) -> MultiOn.SessionsCloneResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await multiOn.sessions.clone("session_id");
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


<details><summary> <code>multiOn.sessions.<a href="./src/api/resources/sessions/client/Client.ts">retrieveScreenshot</a>(sessionId) -> MultiOn.SessionsRetrieveScreenshotResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This function is used to get a screenshot for a website.

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
await multiOn.sessions.retrieveScreenshot("session_id");
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


