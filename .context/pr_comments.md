# PR Review - Service health check orchestrator (by Ravi)

## Reviewer: Nisha Gupta
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `healthChecker.js`

> **Bug #1:** Health check timeout is set to 0ms so all checks timeout immediately and report unhealthy
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `serviceRegistry.js`

> **Bug #2:** Aggregate status returns HEALTHY when any service is healthy instead of when ALL are healthy
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Ravi**
> Acknowledged. I have documented the issues for whoever picks this up.
