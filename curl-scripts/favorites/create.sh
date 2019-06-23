#!/bin/bash

curl "http://trailer-share.herokuapp.com/favorites" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "favorite": {
      "trailer_id": "'"${TRAILER}"'"
    }
  }'

echo
