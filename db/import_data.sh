#! /bin/bash

mongoimport --db data --collection='products' --file='./usr/src/products_1.json' --jsonArray