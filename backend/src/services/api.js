const axios = require('axios');

const apiGitHub = axios.create({
    baseURL: "https://api.github.com"
});

const apiAuthInstagram = axios.create({
    baseURL: "https://graph.instagram.com"
});

module.exports = {
    apiGitHub,
    apiAuthInstagram
}