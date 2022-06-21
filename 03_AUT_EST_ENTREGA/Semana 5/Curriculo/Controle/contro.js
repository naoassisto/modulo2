import { openDb } from '../curri';

export async function createTable () {
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS curriculo (id INTEGER PRIMARY KEY, formacao TEXT, experiencia TEXT, idiomas text)');
    })
}

