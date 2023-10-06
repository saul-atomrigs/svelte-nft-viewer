#!/bin/bash

ASSETS_SOURCE_DIR=./node_modules/dekeyv2-wallet-core/dist/js
ASSETS_TARGET_DIR=./public/assets

echo "Creating target directory: $ASSETS_TARGET_DIR"
mkdir -v -p $ASSETS_TARGET_DIR

echo "Clearing $ASSETS_TARGET_DIR"
rm -f $ASSETS_TARGET_DIR/dkeyswasm*.wasm

echo "Copy necessary files..."
cp -v $ASSETS_SOURCE_DIR/dkeyswasm*.wasm $ASSETS_TARGET_DIR
cp -v $ASSETS_SOURCE_DIR/wasm_exec.js $ASSETS_TARGET_DIR
cp -v $ASSETS_SOURCE_DIR/mpc_worker.mjs $ASSETS_TARGET_DIR