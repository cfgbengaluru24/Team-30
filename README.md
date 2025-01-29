# Project Name

## Overview

Brief description of your project. What does it do? What problem does it solve?

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- Python (v3.7 or later)
- pip (latest version)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name  ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or if you prefer using yarn:

   ```bash
   yarn install
   ```

### Running the Project

#### Frontend

1. **Start the development server**

   ```bash
   npm run dev
   ```

   or with yarn:

   ```bash
   yarn dev
   ```

   This will start the Vite development server. Open your browser and navigate to `http://localhost:3000` to see your application in action.

#### Backend

1. **Navigate to the backend directory**

   ```bash
   cd backend
   ```

2. **Install backend dependencies**

   ```bash
   npm install
   ```

   or with yarn:

   ```bash
   yarn install
   ```

3. **Start the backend server**

   ```bash
   npm start
   ```

   or with yarn:

   ```bash
   yarn start
   ```

   The backend server will start, typically running on `http://localhost:5000`.

## Scripts

In the project directory, you can run the following scripts:

### Frontend Scripts

- **`npm run dev` or `yarn dev`**: Runs the app in development mode using Vite.
- **`npm run build` or `yarn build`**: Builds the app for production to the `dist` folder.
- **`npm run serve` or `yarn serve`**: Serves the built app from the `dist` folder.

### Backend Scripts

- **`npm start` or `yarn start`**: Starts the backend server.

### ML
- **`pip install -r requirements.txt` to install required dependencies.
- **`streamlit run ML/streamLit.py --server.port=8081`** to run the required streamlit app.

## Folder Structure

```
Team-30/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── ml/
│   ├── area.gpx
│   ├── area.py
│   ├── BRT Daily people count.jpg
│   ├── face.py
│   ├── iot.py
│   ├── mmod_human_face_detector.dat
│   ├── PHOTO-2024-07-27-14-23-48.jpg
│   ├── polygon_with_centroid_and_area.gpx
│   ├── streamLit.py
│   ├── test1.jpg
│   ├── test.jpg
│   ├── vegetation.jpg
│   ├── requirements.txt
│   ├── .env
│   └── README.md
├── .gitignore
├── README.md
└── package.json

```

## Technologies Used

- **Frontend**: React, Vite, CSS/SCSS
- **Backend**: Node.js, Express, MongoDB (if applicable)
- **ML**: Tensorflow, Numpy, OpenCV
 <br /> <br /> The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC"). JPMC did not create or contribute to the development of the Code. This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code, including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.