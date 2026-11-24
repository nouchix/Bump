File drop target for the upload flow — audio (default) or cover art (`compact`).
```jsx
<Dropzone title="Select or drop MP3 file" accept="audio/*" onFile={setAudio} />
<Dropzone compact icon="image" title="Upload square artwork (JPG, PNG)" />
```
