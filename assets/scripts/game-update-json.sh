curl --include \
--request PATCH "http://tic-tac-toe.wdibos.com/game/616" \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiViMjliMzdjNjEyOThiODRlZjk2ZGNkMjc3MzRmNGQ5ZQY6BkVG--0e384859759ff545abb359eca2d54d4c745e43ba" \
--data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'
