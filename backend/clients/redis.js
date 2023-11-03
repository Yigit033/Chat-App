const redis = require("redis");

const getClient = () => {
	return redis.createClient({
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASS,
		db: 1,
	});
};

module.exports.getClient = getClient;


// REDİSİ NEDEN KULLANIYORUZ!!!!!! 
// Gelen mesajları veri tabanına kaydetmek için ve gelen herhangi bir kullanıcınında geçmiş mesajları görebilmesi için kullanıyoruz!!!!!!!