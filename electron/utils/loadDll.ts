import koffi from 'koffi';
import path from 'node:path';

const libPath = path.resolve(__dirname, './static/libmylib.dll');
const lib = koffi.load(libPath);

// 定义 addFunc
const addFunc = lib.func('add', 'int', ['int', 'int']);

export { addFunc };
