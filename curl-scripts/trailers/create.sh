#!/bin/bash

curl "https://trailer-share.herokuapp.com/trailers/" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "trailer": {
    "make": "'"${MAKE}"'",
    "model": "'"${MODEL}"'",
    "year": "'"${YEAR}"'",
    "trailer_type": "'"${TRAILER_TYPE}"'",
    "hitch_type": "'"${HITCH_TYPE}"'",
    "length": "'"${LENGTH}"'",
    "gvwr": "'"${GVWR}"'",
    "axels": "'"${AXELS}"'",
    "picture": "'"${PICTURE}"'"
  }
}'

echo
