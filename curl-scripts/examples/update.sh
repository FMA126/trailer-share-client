#!/bin/bash

curl "https://trailer-share.herokuapp.com/examples/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
