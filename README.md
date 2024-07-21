# Customer Transactions App

## Description

The Customer Transactions App is a React-based web application that allows users to view and filter customer data and their transaction amounts. The application uses a mock JSON server to provide data, simulating a backend service. Users can filter customers by their name and view their total transaction amounts, which are dynamically calculated from the provided transaction data.

## Features

- **Customer Listing**: Displays a list of customers.
- **Transaction Amount Calculation**: Calculates and displays the total transaction amount for each customer.
- **Filtering**: Allows filtering customers by name and minimum transaction amount.

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- [JSON Server](https://github.com/typicode/json-server) (for serving the mock data)

## Setup

```bash
npm install -g json-server

```

```bash
json-server --watch db.json --port 5000

```

```bash
npm start

```
