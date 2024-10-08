// TODO user32.dll 只能在windows下运行
// import koffi from 'koffi'
//
// // Load the shared library
// const lib = koffi.load('user32.dll');
//
// // Declare constants
// const MB_OK = 0x0;
// const MB_YESNO = 0x4;
// const MB_ICONQUESTION = 0x20;
// const MB_ICONINFORMATION = 0x40;
//
// // Find functions
// const MessageBoxA = lib.func('__stdcall', 'MessageBoxA', 'int', [
//   'void *',
//   'str',
//   'str',
//   'uint',
// ]);
// const MessageBoxW = lib.func('__stdcall', 'MessageBoxW', 'int', [
//   'void *',
//   'str16',
//   'str16',
//   'uint',
// ]);
//
// // 封装打开消息框的函数
// function openMessageBoxA(message, title) {
//   return MessageBoxA(null, message, title, MB_YESNO | MB_ICONQUESTION);
// }
//
// function openMessageBoxW(message, title) {
//   return MessageBoxW(null, message, title, MB_ICONINFORMATION);
// }
//
// // 导出封装的函数
// module.exports = {
//   openMessageBoxA,
//   openMessageBoxW,
// };
