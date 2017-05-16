#!/bin/bash

#curl "http://localhost:3000/sign-up" \
curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "mar123@email",
      "password": "pass1234",
      "password_confirmation": "pass1234"
    }
}'

# data output from curl doesn't have a trailing newline
echo
