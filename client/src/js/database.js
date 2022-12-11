import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

initDb = async () => {
  openDB(contact_db, 1, upgrade(db) {})
}