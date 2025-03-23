# Resume Edit Functionality Documentation

## Overview

This document explains the editable functionality implemented in the Angular Resume application. The application allows an admin user to edit content directly through the UI, with changes persisted to a Firebase Realtime Database.

## Table of Contents

1. [Authentication System](#authentication-system)
2. [Firebase Integration](#firebase-integration)
3. [Editable Components](#editable-components)
4. [How to Use](#how-to-use)
5. [Technical Implementation](#technical-implementation)

## Authentication System

The application uses a simple authentication system to control access to editing features:

- An "Admin" button appears in the top-right corner of the main component
- Clicking this button opens a login popup
- Default credentials are:
  - Username: `admin`
  - Password: `admin123`
- After successful login, edit buttons appear on editable components
- A "Logout" button replaces the "Admin" button when logged in

## Firebase Integration

The application uses Firebase Realtime Database to persist data:

- Base URL: `https://angulartest-93e44-default-rtdb.asia-southeast1.firebasedatabase.app/`
- Data is organized by section (e.g., `/resume/about.json`, `/resume/experience.json`)
- HTTP requests are used to fetch and update data
- If Firebase data is unavailable, the application falls back to default content

## Editable Components

### About Component

The About component allows editing the personal description:

1. When logged in as admin, an "Edit" button appears next to the section title
2. Clicking the button opens a popup with a textarea containing the current description
3. After editing, clicking "Save" updates both the Firebase database and the UI

### Experience Component

The Experience component allows managing work experience entries:

1. When logged in as admin, an "Edit" button appears next to the section title
2. Clicking the button opens a popup showing all current experience entries
3. Each entry can be edited (company, role, duration)
4. New entries can be added with the "Add Experience" button
5. Existing entries can be removed with the "Remove" button
6. After editing, clicking "Save" updates both the Firebase database and the UI

## How to Use

### For Admins:

1. Click the "Admin" button in the top-right corner
2. Enter admin credentials (username: `admin`, password: `admin123`)
3. Navigate to the section you want to edit
4. Click the "Edit" button that appears next to the section title
5. Make your changes in the popup form
6. Click "Save" to update the content or "Cancel" to discard changes
7. Click "Logout" when finished to prevent unauthorized edits

### For Visitors:

Visitors will see the most up-to-date content without any edit buttons or admin controls.

## Technical Implementation

### Core Services

1. **AuthService**: Manages admin authentication state
   - Stores login status in a BehaviorSubject
   - Provides methods for login and logout
   - Exposes an observable for components to react to auth state changes

2. **FirebaseService**: Handles data operations
   - Provides methods to fetch and update data for each section
   - Uses Angular's HttpClient for API requests
   - Handles error cases gracefully

### Component Structure

Each editable section follows a similar pattern:

1. **Main Component** (e.g., AboutComponent, ExperienceComponent)
   - Displays the content
   - Shows/hides edit button based on admin status
   - Manages loading and error states
   - Fetches data on initialization

2. **Edit Component** (e.g., EditAboutComponent, EditExperienceComponent)
   - Provides the edit form interface
   - Receives current data via @Input()
   - Emits updated data via @Output()
   - Handles form validation and submission

### Data Flow

1. On application load, components fetch their data from Firebase
2. When an admin makes edits and saves:
   - Data is sent to Firebase via HTTP PUT request
   - On successful save, the component's local data is updated
   - The UI reflects the changes immediately

### Styling

Edit functionality includes consistent styling:

- Edit buttons are green with a pencil icon
- Edit popups have a semi-transparent overlay background
- Forms use consistent styling for inputs and buttons
- Loading and error states are clearly indicated

---

*This functionality was implemented on March 21, 2025*
