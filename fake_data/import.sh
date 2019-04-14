#!/bin/bash

# Colors
RED='\033[0;31m'
NC='\033[0m' # No Color

function import_json {
    for data_file in `find $2 -iname '*.json'`
    do
        echo "Importing $data_file to $1"
        mongoimport --uri="mongodb+srv://deeplegal:CRFtI1BAtouDXn9O@cluster0-i3jck.gcp.mongodb.net/test?retryWrites=true" --collection="$1" --file="$data_file"
        if [ $? -ne 0 ]
        then
            echo -e "${RED}Import failed!$NC"
        fi
    done
}

import_json clients client_data/
import_json documents document_data/
import_json users user_data/