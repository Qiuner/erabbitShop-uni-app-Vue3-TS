// // 假如项目中存在这样一个函数
// const options = {
//   url: '/api/data',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data: {
//     userId: 123
//   }
// };
// //  对其使用操作符
// uni.request({
//   ...options,
//   success(res) {
//     // 成功处理逻辑
//   },
//   fail(err) {
//     // 失败处理逻辑
//   }
// });

// // 相当于
// uni.request({
//   url: '/api/data',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data: {
//     userId: 123
//   },
//   success(res) {
//     // 成功处理逻辑
//   },
//   fail(err) {
//     // 失败处理逻辑
//   }
// });
