import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const text = process.argv[2];
const iso_code = franc(text);

if(iso_code === 'und'){
    console.log(colors.red('Could not recognise language'));
}
else{
    const language = langs.where('3',iso_code);
    if(language){
        console.log(colors.green(language.name));
    }
    else{
        console.log(colors.red("Cannot recognise language"));
    }
}