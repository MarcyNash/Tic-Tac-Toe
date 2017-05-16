#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "mar123@email",
      "password": "pass5678"
    }
  }'

  # data output from curl doesn't have a trailing newline
  echo
