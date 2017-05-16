#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/sign-out?id=48" \
  --include \
  --request DELETE

# data output from curl doesn't have a trailing newline
echo

# data output from curl doesn't have a trailing newline
echo
