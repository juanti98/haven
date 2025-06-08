module.exports = {
  apps: [
    {
      name: "haven",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
