#!/bin/bash

curl "https://trailer-share.herokuapp.com/examples/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
