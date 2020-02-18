```bash
sudo apt-get update
```

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

"Yes" to restart

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

```
sudo apt-get update
```

Install Docker engine CE:

```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Assume root user permissions by running the following command:

```
sudo su
```

```
ufw allow 80,443,3000,996,7946,4789,2377/tcp; ufw allow 7946,4789,2377/udp;
```

Now, in Lightsail settings, enable ports:

- HTTPS	TCP	443	
- Custom	TCP	3000	
- MySQL/Aurora	TCP	3306	
- Custom	TCP	33060

```
docker run -p 80:80 -p 443:443 -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock -v /captain:/captain caprover/caprover
```

On your local machine:

```
npm install -g caprover
```

```
caprover serversetup2
```
