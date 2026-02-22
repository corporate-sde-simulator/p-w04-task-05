const HealthChecker = require("../src/healthChecker.js");
const ServiceRegistry = require("../src/serviceRegistry.js");

describe("Service health check orchestrator", () => {
    test("should process valid input", () => {
        const obj = new HealthChecker();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new HealthChecker();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new HealthChecker();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new ServiceRegistry();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
