---

# Image Gallery

A simple and responsive image gallery built with Node.js and Express. This project allows users to upload, view, and manage images, creating a visually appealing gallery interface.

## Live Link
  https://imagegallery-79h9.onrender.com/

## Features

- Display images in a grid format
- Responsive design
- Simple and user-friendly interface

## Tech Stack

- **Frontend**: EJS
- **Backend**: Node.js, Express.js
- **Environment Variables**: Managed using `dotenv`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sortechintu310/imagegallery.git
   ```

2. Navigate into the project directory:

   ```bash
   cd imagegallery
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure your environment variables. Example:

   ```
  API_URL = "https://free-images-api.p.rapidapi.com/v2/random/1"
  API_KEY = "363edf150emsh420cd19ae790065p17c4c0jsn5ffd3a29a662"
  API_HOST = "free-images-api.p.rapidapi.com"
   ```

5. Start the application:

   ```bash
   npm app.js
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Upload images to add them to the gallery.
3. Browse the gallery to view or delete images.

## Folder Structure

```
/imagegallery
│
├── /public          # Static assets (CSS, JS, images)
├── /views           # HTML templates (or views if using template engine)
├── app.js           # Main server file
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, feel free to contact:

- **Chintu Sorte**  
  [GitHub Profile](https://github.com/sortechintu310)

---
