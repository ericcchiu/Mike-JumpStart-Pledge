require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "Pledges",
      script: "./server/server.js",
      watch: ["server", "public"],
      env: {
        NODE_ENV: "development",
        DB_HOST: process.env.DEV_DB_HOST,
        DB_USER: process.env.DEV_DB_USER,
        DB_PASSWORD: process.env.DEV_DB_PASSWORD,
        DB_NAME: process.env.DEV_DB_NAME,
        PORT: process.env.DEV_PORT,
        TEST: process.env.DEV_TEST
      },
      env_production: {
        NODE_ENV: "production",
        DB_HOST: process.env.PROD_DB_HOST,
        DB_USER: process.env.PROD_DB_USER,
        DB_PASSWORD: process.env.PROD_DB_PASSWORD,
        DB_NAME: process.env.PROD_DB_NAME,
        PORT: process.env.PROD_PORT,
        TEST: process.env.PROD_TEST
      }
    }
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-234-245-254.compute-1.amazonaws.com",
      port: "22",
      key: "~/.ssh/firstInstance.pem",
      ref: "origin/master",
      repo: "git@github.com:Michael-K-Oconnor/Mike-JumpStart-Pledge.git",
      path: "/home/ubuntu/Mike-JumpStart-Pledge",
      "post-deploy":
        "npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};
