#!/bin/env sh

# 更换.env中的变量为注入的shell变量
sed -ie "s/^OPENAI_API_KEY=.*$/OPENAI_API_KEY=${OPENAI_API_KEY}/" .env

# run cmd
exec "$@"
