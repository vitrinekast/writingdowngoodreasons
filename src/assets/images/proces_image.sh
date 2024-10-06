#!/bin/bash

# Check if an input file was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <input.png>"
  exit 1
fi

# Get the input file
input_file="$1"

# Extract the base name without the extension
base_name=$(basename "$input_file" .png)

mogrify -trim "$input_file"

cwebp "$input_file" -o "$base_name".webp

echo "Trimmed file, set to webp saved as $output_file"