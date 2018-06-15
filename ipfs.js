const Browseth = require(browseth).default;

const ipfs = new Browseth.Fs.ipfs({
  config: {
    Addresses: {
      Swarm: [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
      ],
    },
  },
});

const f = async () => {
  await ipfs.start();
  console.log(ipfs.peers());
};

f();
