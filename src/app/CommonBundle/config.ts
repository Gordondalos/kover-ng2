/**
 * Главный конфигурационный файл
 * @global
 * @see app/_src/js/Common/config.ts
 * @property  { string } langDefault Устанавливается язык по умолчанию 'Ru'
 * @property {string} ApiURL Адресс Апи сервера
 * @property {string} ApiContentType формат заголовка для общения с сервером
 * @property {string} ApiFormat формат заголовка для общения с сервером
 * @property {string} GetUserURI Адресс на сервере куда должен попасть логин и пароль чтобы вернулся обьект с юзером
 * @property {string} CookieURI Адресс на сервере куда нужно послать куку для получения обьекта юзера
 *
 */
export var CONFIG : any = {
    'langDefault' : 'ru',
    'ApiURL' : 'http://koverapi.io/app_dev.php',
    "ApiContentType" : 'application/json; charset=UTF-8',
    "ApiFormat" : 'json',
    'GetUserURI' : '/user/login',
    "CookieURI" : '/user',
    "MainPage": '/main',
    "model": {
        'CustomersPhones': {'url':'/customer/phone/json'},
        'Organization': {'url':'/organization/json'},
        'Customer': {'url':'/customer/customer/json'},
        'Voditel': {'url':'/voditel/json'},
        'DriverNow': {'url':'/voditelnow/new/json'},

        'VoditelNowByParam': {'url':'/voditelnow/json/byparam'},
        'OrderNew': {'url':'/orders/json/new '},
        'OrdersActive': {'url':'/orders/active '}
    }
};
