#!/bin/bash

./gen-includes > jade/scripts.jade
node compile.js
