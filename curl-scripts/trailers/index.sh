#!/bin/bash

curl "https://trailer-share.herokuapp.com/trailers" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
