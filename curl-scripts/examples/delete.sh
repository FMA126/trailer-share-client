#!/bin/bash

curl "https://trailer-share.herokuapp.com/examples/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
