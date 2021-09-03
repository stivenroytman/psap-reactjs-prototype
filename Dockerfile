FROM redis
RUN \
apt update -y &&\
apt upgrade -y &&\
apt install -y git npm yarn &&\
git clone https://github.com/stivenroytman/psap-reactjs-prototype &&\
cd psap-reactjs-prototype &&\
npm install . &&\
yarn start
