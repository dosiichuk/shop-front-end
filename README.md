# Angular Shop Application

This is a front-end application for an online shop built with Angular. The application allows users to browse products, view product details, add items to the cart, and complete orders. The project uses a JSON server to simulate a backend API for managing product and cart data.

## Development Server

To start the development server, follow these steps:

1. **Start the JSON Server**:
   The application relies on a JSON server to simulate backend data. Start the JSON server by running:

   ```bash
   npm run json-server
   ```

   This will start the JSON server at `http://localhost:3000/`.

2. **Start the Angular Application**:
   In a separate terminal, start the Angular development server by running:

   ```bash
   ng serve
   ```

   Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## JSON Server

The JSON server is used to simulate backend data for the shop. It provides endpoints for products, categories, and cart data. The server runs on `http://localhost:3000/`.

To modify the data, edit the `db.json` file located in the root of the project.

---

