FROM ubuntu:focal

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

RUN apt-get install git -y

WORKDIR /home/app

# copy main.sh to main.sh
COPY main.sh main.sh
COPY script.js script.js
COPY package*.json .

RUN npm install

# giving exexutable permissions 
RUN chmod +x main.sh
RUN chmod +x script

# when container up and running this 
# main.sh automatically executes
ENTRYPOINT [ "/home/app/main.sh" ]