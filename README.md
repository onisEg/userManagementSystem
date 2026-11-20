# User Management System

A React and TypeScript dashboard that signs a user in through DummyJSON and provides list, detail and form views for its sample user records.

[Open the live demo](https://user-management-system-orpin.vercel.app/) · [View screenshot](https://raw.githubusercontent.com/onisEg/resume/23df91e50f87b60e1360d79edcc24cf77eb09b07/public/projects/user-management.webp)

## Working with a user record

1. The login component posts credentials to `/auth/login` and reads the token field expected by this client. Authentication depends on the response shape of the external service.
2. Opening the user list requests `/users`. Opening the editor loads `/users/{id}` so the form can display an existing record.
3. The form posts new records to `/users/add` and sends updates to `/users/{id}`. The list also provides a delete action. These endpoints belong to a demonstration API, so a successful write response should be checked separately from persistence after reload.

## Run locally

Use Node.js 22.12 or later and npm. From the repository root, run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build the distributable files in `dist/`, run `npm run build`. To serve that build locally, run `npm run preview`.

## Source guide

| File or directory | What to look for |
| --- | --- |
| [src/Components/Login/Login.tsx](src/Components/Login/Login.tsx) | Login request and token storage. |
| [src/Components/UserList/UserList.tsx](src/Components/UserList/UserList.tsx) | Fetch and delete actions. |
| [src/Components/UserData/UserData.tsx](src/Components/UserData/UserData.tsx) | Load a record and choose create or update on submit. |
| [src/Context/AuthContext.tsx](src/Context/AuthContext.tsx) | Shared authentication state. |
| [src/Components/Profile](src/Components/Profile) | Profile view. |

## Manual walkthrough

Using a demo account, open one existing user and compare its ID with the request URL. Submit a change using a test record, observe the response and reload the list. If login returns a successful response but navigation fails, compare its token property with the one read by Login.tsx.
