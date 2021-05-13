// Discord info
const discord_bot_token = process.env.T;
const discord_guild_id = '841472184929353769';
const discord_verified_role = 'Member';

// reCAPTCHA v2 secret key
const recaptcha_secret_key = process.env.R;

// Domain
const domain = 'https://captcha.finnsmp.ml'; // Leave empty for localhost

module.exports = {
    discord_bot_token,
    discord_guild_id,
    discord_verified_role,
    recaptcha_secret_key,
    domain
}
