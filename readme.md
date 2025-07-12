# API Automation Testing Project - Nest Academy Collaboration

A comprehensive API automation testing framework built with Mocha and Chai for testing REST APIs. This project was developed as part of a collaboration at Nest Academy.

## 🚀 Project Overview

This project demonstrates automated API testing using modern JavaScript testing frameworks. It tests the [Reqres API](https://reqres.in/) which provides a hosted REST API for testing and prototyping.

## 🛠️ Tech Stack

- **Testing Framework**: Mocha
- **Assertion Library**: Chai
- **HTTP Client**: Axios
- **Schema Validation**: Chai JSON Schema
- **Reporting**: Mochawesome
- **Environment Management**: dotenv
- **Module System**: ES Modules

## 📁 Project Structure

```
nest-apinest/
├── tests/
│   ├── data/                 # Test data files
│   │   └── user.data.js
│   ├── helper/               # Helper utilities
│   │   └── lib-api.js
│   ├── pages/                # Page Object Model (API endpoints)
│   │   ├── base.api.js       # Base API configuration
│   │   ├── patch.api.js      # PATCH API methods
│   │   └── reqres.api.js     # Reqres API methods
│   ├── scenarios/            # Test scenarios
│   │   ├── login.test.js
│   │   ├── patch.test.js
│   │   ├── put.test.js
│   │   └── register.test.js
│   └── schema/               # JSON schema validation
│       └── register.schema.js
├── package.json
└── yarn.lock
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nest-apinest
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   BASE_URL=https://reqres.in/api
   ```

## 🚀 Usage

### Running Tests

Execute all test scenarios:
```bash
yarn run mocha:test
```

This will:
- Run all test files in the `tests/scenarios/` directory
- Generate HTML reports in the `reports/` directory
- Display test results in the terminal

### Running Individual Tests

You can run specific test files:
```bash
npx mocha tests/scenarios/login.test.js
npx mocha tests/scenarios/register.test.js
```

## 📝 Test Scenarios

The project includes the following test scenarios:

### 1. User Registration (`register.test.js`)
- Tests successful user registration
- Validates response structure and data types
- Checks for required fields (id, token)

### 2. User Login (`login.test.js`)
- Tests successful user login
- Validates authentication token generation
- Verifies response status and structure

### 3. User Update - PUT (`put.test.js`)
- Tests complete user data update using PUT method
- Validates updated user information

### 4. User Update - PATCH (`patch.test.js`)
- Tests partial user data update using PATCH method
- Validates partially updated user information

## 🏗️ Architecture

### Page Object Model
The project uses the Page Object Model pattern for better code organization:

- **`base.api.js`**: Contains base Axios configuration and common HTTP methods
- **`reqres.api.js`**: Contains all Reqres API endpoint methods
- **`patch.api.js`**: Contains PATCH-specific API methods

### Test Data Management
- **`user.data.js`**: Contains all test data objects for different scenarios
- Separates test data from test logic for better maintainability

### Helper Functions
- **`lib-api.js`**: Contains utility functions for API testing
- Currently includes URL parameter handling

## 📊 Reports

The project generates detailed HTML reports using Mochawesome. After running tests, check the `reports/` directory for:
- Test execution results
- Pass/fail statistics
- Detailed error information
- Test duration metrics

## 🤝 Contributing

This project was developed as part of a Nest Academy collaboration. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add appropriate tests
5. Submit a pull request

## 📖 Learning Resources

This project demonstrates:
- REST API testing best practices
- Page Object Model implementation
- Test data management
- Environment configuration
- JavaScript ES Modules usage
- Async/await patterns in testing

## 🔍 API Endpoints Tested

The project tests the following Reqres API endpoints:
- `POST /register` - User registration
- `POST /login` - User authentication
- `PUT /users/2` - Complete user update
- `PATCH /users/2` - Partial user update

## 🐛 Troubleshooting

### Common Issues

1. **Module Import Errors**: Ensure you're using `.js` extensions in import statements
2. **Environment Variables**: Make sure `.env` file is properly configured
3. **Network Issues**: Check internet connection for API calls

### Known Limitations

- The project uses module aliases but some imports use relative paths due to configuration issues
- Base URL must be set in environment variables

## 📄 License

MIT License - Feel free to use this project for learning and development purposes.

---

**Author**: collaboration team  
**Project**: Nest Academy Collaboration  
**Version**: 1.0.0
```