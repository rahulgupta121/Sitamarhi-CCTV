backend/
│── node_modules/            # Installed dependencies
│── src/
│   ├── config/
│   │   ├── db.js            # MongoDB connection setup
│   │   ├── env.js           # Environment variable configuration
│   ├── controllers/
│   │   ├── authController.js # Authentication logic (login, register)
│   │   ├── userController.js # User-related operations
│   ├── models/
│   │   ├── User.js          # Mongoose User schema
│   ├── middleware/
│   │   ├── authMiddleware.js # JWT authentication middleware
│   ├── routes/
│   │   ├── authRoutes.js    # Authentication routes
│   │   ├── userRoutes.js    # User routes
│   ├── utils/
│   │   ├── generateToken.js # JWT token generator
│   ├── app.js               # Express application setup
│   ├── server.js            # Server entry point
│── .env                     # Environment variables
│── .gitignore                # Ignore unnecessary files
│── package.json              # Project dependencies
│── README.md                 # Project documentation
