# stankwolf-deploy
1. git clone https://github.com/stank2010/stankwolf-deploy.git
2. npm i -g pm2
3. cd server && npm install && cd ..
4. cd client && npm install && cd ..
5. pm2 start ./stankwolf-deploy/server/server_socket.js
6. pm2 start ./stankwolf-deploy/client/client.js
