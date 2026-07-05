
# Mongo Node Express Template

This project is a boilerplate for building RESTful APIs using Node.js, Express, TypeScript, and MongoDB (via Mongoose). It is designed for rapid backend development with best practices and easy deployment (e.g., Vercel).

## Features

- Express.js server with TypeScript
- MongoDB integration using Mongoose
- Environment variable support with dotenv
- CORS enabled
- Jest for testing
- Ready for deployment (Vercel config included)

## Project Structure

```
├── src/
│   ├── app.ts           # Express app setup
│   ├── server.ts        # Server entry point
│   ├── lib/
│   │   └── db.ts        # MongoDB connection logic
│   ├── controllers/     # (Empty, for your controllers)
│   ├── models/          # (Empty, for your Mongoose models)
│   └── routes/          # (Empty, for your routes)
├── __tests__/           # Jest test files
├── package.json         # Project metadata and scripts
├── tsconfig.json        # TypeScript configuration
├── jest.config.ts       # Jest configuration
├── vercel.json          # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- pnpm (or npm/yarn)
- MongoDB instance (local or remote)

### Installation

1. Clone the repository:
	```sh
	git clone <repo-url>
	cd mongo-node-express-temp
	```
2. Install dependencies:
	```sh
	pnpm install
	```
3. Create a `.env` file in the root directory and add your MongoDB URI:
	```env
	MONGO_URI=mongodb://localhost:27017/your-db
	PORT=3000 # optional, defaults to 8080
	```

### Running the Server

```sh
pnpm dev
# or
npx tsc && node dist/src/server.js
```

The server will start on `http://localhost:8080` (or the port you set).

### Testing

Run all tests using Jest:

```sh
pnpm test
# or
npm test
```

## Deployment

This project is ready to deploy on Vercel. See `vercel.json` for configuration.

## Contributing

Feel free to fork this repo and submit pull requests!

## License

ISC
