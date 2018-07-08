import {ObjectDefine} from "../../src/tdlib-core/Object";
import {assert} from "chai";

describe("Object Class Test", function () {
    it("baseObject should have @type", () => {
        const object = new ObjectDefine.node_tdlib_object("ok");
        const type: string = object.getType();
        assert.isNotNull(type);
    });

    it("object class should counld return parsed json", () => {
        const ok = new ObjectDefine.node_tdlib_ok();
        const json = ok.toJson();
        assert.isNotNull(json);
    });
});