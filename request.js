/**
 * Telegram GET request
 * @param {*} method 
 * @param {*} options Paramters
 */
function get_fetch(method,options = null) {
    let url = `https://api.telegram.org/bot${access_token}/${method}`;
    let response = UrlFetchApp.fetch(url,{
        method: "GET",
        payload: options
      });
      return response;
}
/**
 * Telegram POST request
 * @param {*} method 
 * @param {*} options Paramters  
 */
function post_fetch(method,options = null) {
    let url = `https://api.telegram.org/bot${access_token}/${method}`;
    let response = UrlFetchApp.fetch(url,{
        method: "POST",
        payload: options
      });
    return response;
}