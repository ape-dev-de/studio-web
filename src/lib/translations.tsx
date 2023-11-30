import * as fs from "fs";

var translations = {};
export function setTranslation(locale: string) {
    if(!translations) {
        fs.readFile('../public/locales/en/common.json', 'utf8', function (err, data) {
            if (err) throw err;
            translations = JSON.parse(data);
        });
    }
}