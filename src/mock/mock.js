import Mock from 'mockjs'
Mock.mock('http://localhost:8001/login',{
  'token': '332fasdsdsdsdsd'
})
Mock.mock('http://localhost:8080/user',{
  'name' : '@name', // 随机生成姓名
  'name' : '@email', //随机生成邮箱
   'age|1-10': 5, //..年龄1~10岁之间
})
Mock.mock('http://localhost:8080/menu',{
  'name' : '@increment', // id自增
  'name' : 'menu', // 名称为menu
   'order|1-20': 5, //..年龄1~20岁之间
})
