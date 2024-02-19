docker run --name mongodb -d -p 27017:27017 -v C:/data/db mongodb mongodb-community-server:latest

docker stop mongodb && docker rm mongodb
docker start mongodb