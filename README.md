# recaptcha-bot
A bot to protect from bots to do botting, and verify new member's humanity.
### modified by [neumatic](https://github.com/neumaticc) for the [finn smp](http://discord.finnsmp.ml)
### made originally by [nates](https://github.com/nates) ([repo](https://github.com/nates/DiscordVerification))
---
# Discord Verification
 A Discord verification bot made in node.js using reCAPTCHA to verify users.

# Requirements
* node.js (I used v12.18.1)
* express v4.17.1
* axios v0.20.0
* discord.js v12.3.1

# Setup
Register a site with reCAPTCHA [here](https://www.google.com/recaptcha/admin/create) and choose reCAPTCHA v2 "I'm not a robot" Checkbox.
Copy the secret key into variables.js and add the site key on [this line](https://github.com/nates/DiscordVerification/blob/58b5fec761393af87123c9a8b803b2481d7344e7/html/verify.html#L19). Next register an application with Discord [here](https://discord.com/developers/applications) and create a bot. Copy the bot token into variables.js, also set the guild ID and the verified role name. If you would like to use a custom domain change the link on [this line](https://github.com/nates/DiscordVerification/blob/58b5fec761393af87123c9a8b803b2481d7344e7/discord.js#L18).

# Images

![Embed](https://i.imgur.com/zomEnpw.png)
![Website](https://i.imgur.com/tmrcyjF.png)
