# Firebase Cloud Message Demo

## Development

### Frontend

Vite+ React

Initial Script

```
cd frontend
npm i
```

Run

```
npm run dev
```

### Backend

Node.js Express

Initial Script

```
cd backend
npm i
```

Run

```
npm run dev
```

## Initial Firebase Cloud Message

- Create Firebase Account and Go to firebase console
- New Web App
- See the Official Docs at https://firebase.google.com/docs/cloud-messaging/js/client
  ![alt text](image.png)

### Frontend

- Create the Credential file in `frontend/config` from `credential.example.js` to `credential.js` and put the config from your firebase console in it.
- Create file `public/firebase-messaging-sw.js` from `public/firebase-messaging-sw.example.js`
- On Frontend Focus on Recieve a message
- Main Logic is on `App.jsx` and `public/firebase-messaging-sw.js`

- Firebase Notify is both on Foreground and Backgroud for the foregroud in App.jsx backgroud is in service worker
