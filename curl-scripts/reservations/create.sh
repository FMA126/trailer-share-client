#!/bin/bash

curl "http://trailer-share.herokuapp.com/reservations" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "reservation": {
      "date": "'"${DATE}"'",
      "trailer_id": "'"${TRAILER}"'"
    }
  }'

echo
