# Assignment

API for parcel delivery riders.

## Getting Started

Run `docker-compose up -d` from project root.

## API EndPoints:

Base URL: `http://localhost:3000/api/v1/`

- Parcels without rider:
  - `rider/parcels/without-rider`
- Riders ready to deliver:
  - `rider/ready-riders`
- All riders along with collected amounts
  - `rider/total-collected-amount`