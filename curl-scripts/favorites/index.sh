#!/bin/bash

curl "http://trailer-share.herokuapp.com/favorites" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
