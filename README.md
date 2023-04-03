# The Portal Test

This application produces an optimised route for a a very specific warehouse

# Tech & Packages

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en)
- [csv-parser](https://www.npmjs.com/package/csv-parser)
- [CSV Writer](https://www.npmjs.com/package/csv-writer)

# Usage

## Requirement

Provide a CSV input file consists of 3 columns of data: `product_code`, `quantity`, and `pick_location`

    product_code,quantity,pick_location
    15248,10,AZ 5
    25636,1,AZ 4
    26982,1,B 2
    36389,4,F 1
    25214,10,F 2

## Installation

    npm install

## Running the Application

    npm start

The `result.csv` is then generated in the root of the project folder.

## Running Tests

    npm test
