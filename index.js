const crypto = require("crypto");
const fs = require("fs");

const test = [
  [
    "test/e2e/test/boards.test.js",
    "9a0eb1ab9bdd2d2893139cf3fd429df16a0d70003e3c13855ad39a6e6e1e9a4c",
  ],
  [
    "test/e2e/test/tasks.test.js",
    "7d3cdd89147a480a89382bb667365724b42b3fddf9b99e86ee8a0c9c786073d9",
  ],
  [
    "test/e2e/test/users.test.js",
    "378bd4de5adb275d7c2e6f8cae5a361ba9fa34903cdd1beeb8883b7451489522",
  ],
  [
    "test/e2e/lib/index.js",
    "e740b558b32104d1e869f09b81ec960a3eddcfd3531734a85f1a52d7972474ce",
  ],
  [
    "test/e2e/lib/routes.js",
    "44ba73489941f53e10f7d2f0c2ffa1f51f66421b6975fb2f878552e67aa900aa",
  ],
  [
    "test/e2e/test-auth/boards.test.js",
    "fd74b1cf94d739ef6ffbb3c57d7c880aed52c324db5b6ad194d1c81bdc6b541f",
  ],
  [
    "test/e2e/test-auth/tasks.test.js",
    "92b947ef9739a30a9d4e3fd98d3859450ef922393c474d33b701ea8a587cbd51",
  ],
  [
    "test/e2e/test-auth/users.test.js",
    "75b1f0365a4a16a50726d103f220898dadd02867bc1b0c0c8d2aac2f8259668a",
  ],
  [
    "test/e2e/utils/createAuthorizedRequest.js",
    "c48903a67b3749e33b7f56246b35ba51ceee74d37a6dde30711368cd9a147f35",
  ],
  [
    "test/e2e/utils/index.js",
    "9bc5fa880eb179285c996dcff7b14810f30063b3bab6e5a2d906a4315ac9bb88",
  ],
  [
    "test/e2e/utils/shouldAuthorizationBeTested.js",
    "14e792cc8b9a0489eaae22ba53402a2ec9d73a7f3bad1141e04f01cf3573cb2b",
  ],
  [
    "test/setup.js",
    "9de860204a44b11c35b4975ed7c78138d508601a75ab2529fe938f401c92a60b",
  ],
];

const hashes = [];

const runner = async (data) =>
  data.map((file, idx) => {
    const [filename, csum] = file;
    const hash = crypto.createHash("sha256");
    const input = fs.createReadStream(filename).setEncoding("hex");
    hashes[filename] = "";

    input.pipe(hash).setEncoding("hex");
    hash.on("data", (chunk) => (hashes[filename] += chunk));
    hash.on("end", () =>
      console.log(
        `${idx + 1}. ${filename}: `,
        hashes[filename],
        csum === hashes[filename] ? "[Ok]" : "[Wrong]"
      )
    );
  });

runner(test).catch((err) => console.error(err));
