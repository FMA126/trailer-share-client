#!/bin/bash

curl "https://trailer-share.herokuapp.com/trailers/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
