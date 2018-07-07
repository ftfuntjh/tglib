import {Client} from "../src/tdlib-client/client";
import Config from "../config";
import {assert} from "chai";

describe("Client Class Test", function () {
    it("assert client not null", async () => {
        const client = new Client(Config.getConfig());
        await client.init();
        assert.isNotNull(client);
    });

    it("assert client can receive message", async () => {
        const client = new Client(Config.getConfig());
        await client.init();
        const response = await client._receive();
        assert.isNotNull(response);
    });
});