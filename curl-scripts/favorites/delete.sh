#!/bin/bash

curl "http://trailer-share.herokuapp.com/favorites/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
