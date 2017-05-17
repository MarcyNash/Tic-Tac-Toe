#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/change-password/48" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=BAhJIiVlNTQ1OTBmZjJjOWUxZDgwODY3NzczN2I1OTZiNGM0ZQY6BkVG--3296c69eb15bac66870bd1ec7e53fafdaaf50a12" \
  --data '{
    "passwords": {
      "old": "pass5678",
      "new": "pass1234"
    }
}'

# data output from curl doesn't have a trailing newline
echo
