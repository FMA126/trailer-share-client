#!/bin/bash

curl "http://trailer-share.herokuapp.com/favorites/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "favorite": {
      "trailer_id": "'"${TRAILER}"'"
    }
  }'

echo
