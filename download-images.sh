#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images
curl -o public/images/bloomberg-terminal.jpg https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80
curl -o public/images/hero-finance.jpg https://images.unsplash.com/photo-1454165804606-c3d57fd86bb7?w=1920&q=80
curl -o public/images/education-finance.jpg https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80
curl -o public/images/about-finance.jpg https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80
curl -o public/images/investment.jpg https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80
curl -o public/images/retirement.jpg https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80
curl -o public/images/tax.jpg https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80

# Make the script executable
chmod +x download-images.sh 