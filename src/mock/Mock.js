import mockjs from "mockjs";

const Mock = {
  //模拟获取订单数据
  //type:订单类型 0-普通订单 1-秒杀订单
  getOrderList(type) {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(
        mockjs.mock({
          name: type == 0 ? "普通商品" : "秒杀商品",
          price: mockjs.Random.integer(20, 500) + "元",
          buyer: mockjs.Random.cname(),
          time: mockjs.Random.datetime("yyyy-MM-dd HH:mm:ss"),
          role: mockjs.Random.boolean(),
          state: mockjs.Random.boolean(),
          payType: mockjs.Random.boolean(),
          source: mockjs.Random.url(),
          phone: mockjs.mock(/\d{11}/),
        })
      );
    }
    return array;
  },

  //模拟获取商品数据
  //type:商品类型 0-普通商品 1-秒杀商品 2-今日推荐
  getGoodsList(type) {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(
        mockjs.mock({
          name: type == 0 ? "普通商品" : type == 1 ? "秒杀商品" : "今日推荐",
          img: mockjs.Random.dataImage("60x100", "商品示例图"),
          price: mockjs.Random.integer(20, 500) + "元",
          sellCount: mockjs.Random.integer(10, 100),
          count: mockjs.Random.integer(10, 100),
          back: mockjs.Random.integer(10, 100),
          backPrice: mockjs.Random.integer(0, 5000) + "元",
          owner: mockjs.Random.cname(),
          time: mockjs.Random.datetime("yyyy-MM-dd HH:mm:ss"),
          state: mockjs.Random.boolean(),
        })
      );
    }
    return array;
  },
};

export default Mock;
