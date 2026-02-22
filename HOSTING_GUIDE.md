# Hosting Guide for SWAT Bot

This guide provides comprehensive instructions on how to host the SWAT Discord Bot on various platforms, including Railway, Replit, Heroku, Oracle Cloud, and VPS options.

## Table of Contents
1. [Railway](#railway)
2. [Replit](#replit)
3. [Heroku](#heroku)
4. [Oracle Cloud](#oracle-cloud)
5. [VPS Options](#vps-options)

---

### Railway
1. Sign up for a [Railway](https://railway.app) account.
2. Create a new project and select a template to start from.
3. Connect your GitHub repository containing the SWAT Bot code.
4. Configure your environment variables:
   - Add `TOKEN` for your Discord bot token.
5. Deploy your project by clicking the "Deploy" button.
6. Monitor logs and interact with your bot via Discord.

### Replit
1. Go to [Replit](https://replit.com) and sign up or log in.
2. Create a new Repl and choose the Node.js template.
3. Import your SWAT Bot code into the Repl by uploading files or using Git.
4. Install necessary dependencies using npm:
   ```bash
   npm install
   ```
5. Set up your environment variables in the Secrets section:
   - Add `TOKEN` for your Discord bot token.
6. Run your Repl to start the bot and view the output in the console.

### Heroku
1. Create a [Heroku](https://www.heroku.com) account.
2. Install the Heroku CLI and log in using `heroku login`.
3. Create a new app:
   ```bash
   heroku create your-app-name
   ```
4. Set up your environment variables:
   ```bash
   heroku config:set TOKEN=your_discord_bot_token
   ```
5. Deploy the code from your GitHub repo:
   ```bash
   git push heroku main
   ```
6. Scale your app to run:
   ```bash
   heroku ps:scale worker=1
   ```
7. Monitor logs with:
   ```bash
   heroku logs --tail
   ```

### Oracle Cloud
1. Sign up for an [Oracle Cloud](https://www.oracle.com/cloud/) account.
2. Launch a new virtual machine instance and choose your desired OS.
3. SSH into your instance:
   ```bash
   ssh username@your-instance-ip
   ```
4. Install Node.js and Git on your instance:
   ```bash
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   sudo apt-get install -y nodejs git
   ```
5. Clone your SWAT Bot code repository:
   ```bash
   git clone https://github.com/yourusername/SWAT-Bot.git
   cd SWAT-Bot
   npm install
   ```
6. Set your environment variables:
   ```bash
   export TOKEN=your_discord_bot_token
   ```
7. Start the bot:
   ```bash
   node your-bot-file.js
   ```

### VPS Options
1. Choose a VPS provider like DigitalOcean, Linode, or AWS.
2. Set up a new server instance and SSH into it.
3. Install Node.js and Git as mentioned in the Oracle Cloud section.
4. Clone your SWAT Bot repository and install dependencies.
5. Set the environment variable for your Discord bot token.
6. Run the bot using Node.js.

---

These instructions may change over time, be sure to check the respective platforms' documentation for the latest updates.
