function specsBrowser() 
{
	alert("cookiesEnabled is " + navigator.cookieEnabled + 
		"\n\nnavigator.appName is " + navigator.appName +
		"\n\nnavigator.appCodeName is " + navigator.appCodeName +
		"\n\nnavigator.product is " + navigator.product +
		"\n\nversion off application is " + navigator.appVersion +
		"\n\nuser agent is " + navigator.userAgent +
		"\n\nbrowser platform is " + navigator.platform + 
		"\n\nlanguage is " + navigator.language +
		"\n\nbrowser online: " + navigator.onLine +
		"\n\njava enabled: " + navigator.javaEnabled());
}