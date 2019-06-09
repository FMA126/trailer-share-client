#!/bin/bash

curl "https://trailer-share.herokuapp.com/trailers/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
