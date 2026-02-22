# PLATFORM-2901: Investigate service discovery health check failures

**Status:** In Progress · **Priority:** High
**Sprint:** Sprint 26 · **Story Points:** 8
**Reporter:** Suresh Kumar (Infra Lead) · **Assignee:** You (Intern)
**Labels:** `backend`, `javascript`, `infrastructure`, `investigation`
**Task Type:** Code Debugging

---

## Description

Services are being incorrectly marked as unhealthy and removed from the registry. Healthy services get deregistered, causing traffic to route to fewer nodes and creating overload.

**DEBUGGING task — no hint comments in the code.**

## Symptoms

- Service `api-gateway` registered with 4 instances, but registry shows only 1-2 active
- Health check logs show `timeout` for services that respond fine when curled directly
- Deregistered services never get re-registered even after health recovers
- Registry state diverges from actual service health

## Acceptance Criteria

- [ ] Root cause found and fixed
- [ ] All unit tests pass
