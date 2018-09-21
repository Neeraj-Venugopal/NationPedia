/**
 * http://usejsdoc.org/
 */

var lineReader = require('line-reader');

/**
 * Send the contents of an HTML page to the client.
 * @param fileName the name of the file containing the HTML page.
 * @param result the HTTP result.
 */
function sendPage(fileName, result)
{
    var html = '';
    
    // Read the file one line at a time.
    lineReader.eachLine(fileName,
        /**
         * Append each line to string html.
         * Send the contents of html to the client
         * after the last line has been read.
         * @param line the line read from the file.
         * @param last set to true after the last line.
         */
        function(line, last)
        {
            html += line + '\n';

            if (last) 
            { 
                result.send(html);
                return false; 
            }
            else
            {
                return true;
            }
        });
}

/**
 * Extract the first and last names from the request.
 * @param request the HTTP request.
 * @returns a string containing the first and last names.
 */
function getCountry(request)
{
    var country = request.param('country');
    return country;
}

function getFactors(request)
{
   var factors  = request.param('development');
   return factors;
}

/**
 * Send the contents of an HTML page to the client
 * with an inserted body text.
 * @param text the body text.
 * @param result the HTTP result.
 */
function sendBody(country, append, result)
{
    var html = '<!DOCTYPE html>\n'
        + '<html lang="en-US">\n'
        + '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <link rel="stylesheet" href="secondPage.css">'
        + '    <title>NationPedia!!</title>\n'
        + '</head>\n'
        + '<body>\n'
        + '<p><a href="homePage">Home</a></p>'
        + '<br>'
        + '<div class="textClass">'
	        + '<br><img class="image" src="'
	        + country
	        + '_Flag.png">'
	        + '<br>'
	        + '<br>'
	        + '<div class="countryName">'
	        	+ country 
	        	+ '<br>'  
	        + '</div>'
	        + '<br>'    
	        + '<br>'
	        + '<div class="tableClass" align="center">'
	        + append
	        + '</div>'
	        + '<br>'
        + '</div>' 
        + '</body>\n'
        + '</html>\n';
    
    result.send(html);    
}


function retrieveIndia(){
    var html = '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <title>NationPedia!!</title>\n'
        + '<style>\n'
            + 'table, th, td {\n'
                + 'border: 1px solid black;\n'
                + 'border-collapse: collapse;\n'
                + 'text-align: center;\n'
            + '}\n'
            + 'th, td {\n'
                + 'padding: 10px;\n'
                + '}\n'
            + 'tr:nth-child(even){\n'
                + 'background-color: #eab;\n'
                + '}\n'
        + '</style>\n'
        + '</head>\n'
        
        + '<body>\n'
        + '<table>\n'
        + '<tr>\n'
            + '<th>Year</th>\n'
            + '<th>Human Development Index</th>\n'
            + '<th>Poverty Index</th>\n'
            + '<th>Gender Inequality Index</th>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>1990</td>\n'
            + '<td>0.428</td>\n'
            + '<td>0.116</td>\n'
            + '<td>0.687</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>1995</td>\n'
            + '<td>0.459</td>\n'
            + '<td>0.119</td>\n'
            + '<td>0.677</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2000</td>\n'
            + '<td>0.494</td>\n'
            + '<td>0.221</td>\n'
            + '<td>0.619</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2005</td>\n'
            + '<td>0.556</td>\n'
            + '<td>0.282</td>\n'
            + '<td>0.608</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2010</td>\n'
            + '<td>0.580</td>\n'
            + '<td>0.289</td>\n'
            + '<td>0.591</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2015</td>\n'
            + '<td>0.624</td>\n'
            + '<td>0.281</td>\n'
            + '<td>0.530</td>\n'
        + '</tr>\n'
        +'</table>\n'
        +'</body>\n';

        return html;
}

function retrieveUSA(){
    var html = '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <title>NationPedia!!</title>\n'
        + '<style>\n'
            + 'table, th, td {\n'
                + 'border: 1px solid black;\n'
                + 'border-collapse: collapse;\n'
                + 'text-align: center;\n'
            + '}\n'
            + 'th, td {\n'
                + 'padding: 10px;\n'
                + '}\n'
            + 'tr:nth-child(even){\n'
                + 'background-color: #eab;\n'
                + '}\n'
        + '</style>\n'
        + '</head>\n'
        + '<body>\n'
        + '<table>\n'
        + '<tr>\n'
            + '<th>Year</th>\n'
            + '<th>Human Development Index</th>\n'
            + '<th>Poverty Index</th>\n'
            + '<th>Gender Inequality Index</th>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>1990</td>\n'
            + '<td>0.860</td>\n'
            + '<td>0.011</td>\n'
            + '<td>0.305</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>1995</td>\n'
            + '<td>0.875</td>\n'
            + '<td>0.008</td>\n'
            + '<td>0.299</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2000</td>\n'
            + '<td>0.884</td>\n'
            + '<td>0.009</td>\n'
            + '<td>0.264</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2005</td>\n'
            + '<td>0.902</td>\n'
            + '<td>0.007</td>\n'
            + '<td>0.261</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2010</td>\n'
            + '<td>0.910</td>\n'
            + '<td>0.010</td>\n'
            + '<td>0.254</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2015</td>\n'
            + '<td>0.920</td>\n'
            + '<td>0.003</td>\n'
            + '<td>0.203</td>\n'
        + '</tr>\n'
        +'</table>\n'
        +'</body>\n';
        
        return html;
}


function retrieveUK(){
    var html = '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <title>NationPedia!!</title>\n'
        + '<style>\n'
            + 'table, th, td {\n'
                + 'border: 1px solid black;\n'
                + 'border-collapse: collapse;\n'
                + 'text-align: center;\n'
            + '}\n'
            + 'th, td {\n'
                + 'padding: 10px;\n'
                + '}\n'
            + 'tr:nth-child(even){\n'
                + 'background-color: #eab;\n'
                + '}\n'
        + '</style>\n'
        + '</head>\n'
        + '<body>\n'
        + '<table>\n'
        + '<tr>\n'
            + '<th>Year</th>\n'
            + '<th>Human Development Index</th>\n'
            + '<th>Poverty Index</th>\n'
            + '<th>Gender Inequality Index</th>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>1990</td>\n'
            + '<td>0.775</td>\n'
            + '<td>0.017</td>\n'
            + '<td>0.237</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>1995</td>\n'
            + '<td>0.811</td>\n'
            + '<td>0.192</td>\n'
            + '<td>0.222</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2000</td>\n'
            + '<td>0.866</td>\n'
            + '<td>0.181</td>\n'
            + '<td>0.215</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2005</td>\n'
            + '<td>0.899</td>\n'
            + '<td>0.111</td>\n'
            + '<td>0.210</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2010</td>\n'
            + '<td>0.902</td>\n'
            + '<td>0.006</td>\n'
            + '<td>0.206</td>\n'
        + '</tr>\n'
        + '<tr>\n'
            + '<td>2015</td>\n'
            + '<td>0.909</td>\n'
            + '<td>0.002</td>\n'
            + '<td>0.131</td>\n'
        + '</tr>\n'
        +'</table>\n'
        +'</body>\n';
        
       return html;
}


/*
 * GET Front page.
 */
module.exports.frontPage = function(request, result) 
{
    sendPage('./app_server/views/frontPage.html', result);
};



/*
 * GET home page.
 */
module.exports.home = function(request, result) 
{
    sendPage('./app_server/views/firstHTML.html', result);
};

/*
 * GET text fields page.
 */
module.exports.get_about = function(request, result) 
{
    sendPage('./app_server/views/about.html', result);
};


module.exports.get_subscribe = function(request, result) 
{
    sendPage('./app_server/views/subscribe.html', result);
};

module.exports.get_second_page = function(request, result) 
{
    sendPage('./app_server/views/secondPage.html', result);
};

module.exports.post_second_page = function(request, result) 
{
	var country = getCountry(request);
	
	if(country == "india" || country == "India"){
		var append = retrieveIndia();
	}
	
	else if(country == "england" || country ==  "England"){
		var append = retrieveUK();
	}
	
	else{
		var append = retrieveUSA();
	}
	 
    sendBody(country, append, result);
};
