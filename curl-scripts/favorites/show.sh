#!/bin/bash

curl "http://trailer-share.herokuapp.com/favorites/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
