#!/bin/bash

# Check if an input file was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <input.mp3>"
  exit 1
fi

# Get the input file
input_file="$1"

# Extract the base name without the extension
base_name=$(basename "$input_file" .mp3)

# Define the output file name
output_file="${base_name}_trim.mp3"

# Run the ffmpeg command
ffmpeg -i "$input_file" -af silenceremove=1:0:-20dB "$output_file"

echo "Trimmed file saved as $output_file"