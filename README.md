# stankwolf-deploy
1. git clone https://github.com/stank2010/stankwolf-deploy.git
2. npm i -g pm2
3. cd stankwolf-deploy
4. cd server && npm install && cd ..
5. cd client && npm install && cd ..
6. pm2 start ./stankwolf-deploy/server/server_socket.js
7. pm2 start ./stankwolf-deploy/client/client.js
