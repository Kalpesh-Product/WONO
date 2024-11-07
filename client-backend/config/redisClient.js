const { Redis } = require("ioredis");

const redisClient = new Redis({
    password:process.env.REDIS_PASSWORD,
    host:process.env.REDIS_URL,
    port:process.env.REDIS_PORT
});

module.exports = redisClient;