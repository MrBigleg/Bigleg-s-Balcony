
# Bigleg's Balcony - Implementation Guide

This project is a high-fidelity street art archive for Thailand.

## 🔑 Firebase Security Rules (Copy-Paste)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() { return request.auth != null; }
    function isOwner(userId) { return request.auth.uid == userId; }
    function isAdmin() { return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin'; }
    function isModerator() { return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['moderator', 'admin']; }

    // User profiles
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }

    // Artist profiles
    match /artists/{artistId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update: if isOwner(artistId) || isModerator();
    }

    // Artworks
    match /artworks/{artworkId} {
      allow read: if resource.data.status == 'approved' || isModerator() || isOwner(resource.data.artistId);
      allow create: if isAuthenticated();
      allow update: if (isOwner(resource.data.artistId) && resource.data.status == 'pending') || isModerator();
    }
    
    // Logs
    match /moderationLogs/{logId} {
      allow read, write: if isModerator();
    }
  }
}
```

## 📋 Deployment Checklist

1.  **Firebase Project**: Create a new project in Firebase Console.
2.  **Enable Auth**: Turn on Google and Facebook sign-in.
3.  **Storage**: Initialize bucket and add `cors.json` if uploading from local.
4.  **Database**: Create Firestore in Production mode and paste the rules above.
5.  **Environment**: Inject your Firebase Config keys into the frontend environment.

## 🚀 Features implemented
- [x] Immersive Motion UI (Framer Motion)
- [x] Custom View Cursor
- [x] Bilingual System (EN/TH)
- [x] Photo-first Masonry Grid
- [x] Detailed Full-screen Carousel View
- [x] Data models for Moderation Workflow

## 🚧 Coming Soon
- [ ] Map View (Clustered markers)
- [ ] Submission Form Step-by-Step UI
- [ ] Profile Settings
- [ ] Push Notifications for Artist Approvals
