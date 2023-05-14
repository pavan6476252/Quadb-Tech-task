# WazirX Coin Data Server [ TASK ]

This is a simple server built with Node.js, Express, and MongoDB that fetches coin data from the WazirX API and stores it in a MongoDB database. It also provides an API endpoint to retrieve the stored coin data.

## Installation

To install the server, follow these steps:

1. Clone the repository
2. Install dependencies by running `npm install`
3. Start the server by running `npm start`

## Usage

The server has two API endpoints:

- `/storecoins`: This endpoint fetches coin data from the WazirX API and stores it in the database (mongodb atlas).
- `/coins`: This endpoint retrieves the stored coin data from the database.

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, feel free to open an issue or submit a pull request.

## License

This server is licensed under the MIT License. See the `LICENSE` file for more information.
