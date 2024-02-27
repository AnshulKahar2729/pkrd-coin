// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-green-600">
      <div class="text-center">
        <h1 class="text-6xl text-white">404</h1>
        <p class="text-2xl text-white">Page not found</p>
        <p class="text-white">The page you are looking for might be in another castle.</p>
        <Link to="/" class="btn btn-light">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
