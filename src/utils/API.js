import axios from "axios";

export default {
    getPuppies: function () {
        return axios.get("https://api.giphy.com/v1/gifs/search?api_key=5rPClzDDbOEPGAdT6Z1lFvfTxrhbHR5a&q=puppy");
    }
};