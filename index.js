const API = require("kucoin-node-sdk");

API.init(require("./config.tpl"));

const main = async () => {
  while (true) {
    start_time = new Date().getTime();
    try {
      const client = await API.rest.Trade.Orders.postOrder(
        {
          side: "buy",
          symbol: "ETH-BTC",
          type: "market",
          clientOid: "61ba53e234b3b9000160a97f",
        },
        { size: "1" }
      );
      end_time = new Date().getTime();
      console.log(end_time - start_time);
      console.log(client);
    } catch (error) {
      console.log(error);
    }
  }
};

main();
