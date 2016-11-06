import { Pipe, PipeTransform } from '@angular/core';
import { RU } from './translate/lang_ru';
import { EN } from './translate/lang_en';
//import { DE } from './translate/lang_de';
import { CommonService } from './common.service';

/**
 * Основной файл мультиязычности, в нем определяется какие языки подключены и их источники.
 * Применяется как фильтр
 * @see app/_src/js/Common/lang.pipe.ts
 * @example
 * {{ 'Key' | lang }}
 * Ключи смотрите в папке app/_src/js/Common/translate
 * @class LangPipe
 */
@Pipe ( { name : 'lang' } )
export class LangPipe implements PipeTransform {
    /**
     *  значение языка
     * @memberOf LangPipe
     */
    private lang : string;

    /**
     * Конструктор принимает в виде параметра CommonService для того чтобы использовать его метод  getLang() и получить язык установленный для пользователя
     * @method constructor
     * @param commonService { CommonService } Сервис определен в файле  app/_src/js/Common/common.service.ts
     * Описание сервиса можно глянуть тут {@link CommonService|CommonService}
     * @memberOf LangPipe
     */
    constructor ( private commonService : CommonService ) {
        this.lang = commonService.getLang ();
    }

    /**
     * Данный метод трансформирует значение переменной на значение текущего языка определенного в конфиге и при помощи Cookie в CommonService
     * @method transform
     * @param word {string} word - это переводимое слово или фраза
     * @param lang {string} lang - это параметр определяющий язык на который будет переведено слово word
     * @returns { string } вернет переведенное слово
     * @memberOf LangPipe
     */

    transform ( word : string, lang : string ) : string {
        switch ( this.lang ) {
            case 'ru':
                return (RU[ word ])? RU[ word ]: word;
            case 'en':
                return (EN[ word ])? EN[ word ]: word;;
            // case 'de': return DE[word];
            default:
                return RU[ word ];
        }
    }
}