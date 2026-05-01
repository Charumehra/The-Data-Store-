# Week10 Project

A simple Node.js/Express REST API following an MVC-like structure. Includes controllers, models, and routes for posts and users.

## Features
- Basic Express server (entry points: `app.js`, `server.js`).
- Organized `src/` folder with `controllers`, `models`, `routes`, and `config`.
- Example Post resource with routes and controller.

## Prerequisites
- Node.js (v14+ recommended)
- npm


## Configuration
- Database and environment config are in `src/config/db.js`. Update connection details or environment variables as needed.

## Project Structure
- `app.js` / `server.js` — application entry
- `src/controllers/` — request handlers (e.g., `PostController.js`)
- `src/models/` — data models (e.g., `post.js`, `User.js`)
- `src/routes/` — route definitions (e.g., `PostRoute.js`)
- `src/config/` — configuration and DB setup


