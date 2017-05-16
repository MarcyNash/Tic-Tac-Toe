#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/change-password/48" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=BAhJIiVkZDcwYzM1Y2IyYzUzNTBiMTQxNzYyZGE4MDBmNzAwMgY6BkVG--ead3f1d2e180df8ba03a17b31485c7d32317b972" \
  --data '{
    "passwords": {
      "old": "pass1234",
      "new": "pass5678"
    }
}'

# data output from curl doesn't have a trailing newline
echo
