# VIN Decoder

It's Single Page Application (SPA) for decoding Vehicle Identification Number (VIN) using the NHTSA API.

## Demo:


## Feature
- VIN decoding using NHTSA API;
- VIN decoder page:
  - VIN-code input with validation;
  - Display of the last 3 decoded VINs;
  - Display a decoded data of the VINs;
- Vehicle variables page:
  - Show all variables and description of each a variable;
- Variable details page:
  - Show detail information about a selected variable;

## API
The App using the following NHSTA APIs:
URL: https://vpic.nhtsa.dot.gov/api/
PATHs:
- Decode vin: ```vehicles/decodevin/${vinId}?format=json```
- Get vehicle variables: ```vehicles/GetVehicleVariableList?format=json```
- Get variable value: ```vehicles/GetVehicleVariableValuesList/${variableId}?format=json```

## Installation
1. Clone 'vin-decoder' project:
```git clone https://github.com/ystagit/vin-decoder.git```
2. Go to the project's root
3. Install modules:
```npm install```

## Start dev server
1. Start server: ```npm run dev```
2. Go to ```http://localhost:5173```