+++
title = "Architecture"
weight = 20
+++

# Architecture

This section covers the architectural design and implementation details of Kure.

## Design Philosophy

Kure is built on several core principles:

1. **Type Safety First**: Use Go's type system to catch errors early
2. **Composability**: Build complex configurations from simple, reusable parts
3. **No Magic**: Explicit is better than implicit
4. **GitOps Native**: Output designed for version control and automation

## Core Concepts

- **Hierarchical Domain Model**: Cluster → Node → Bundle → Application
- **Builder Pattern**: Fluent APIs for resource construction
- **Strategy Pattern**: Pluggable resource generation strategies
- **Clean Separation**: Domain logic separate from serialization

## Learn More

Read the [full architecture documentation](/architecture/details) for an in-depth exploration of Kure's design, including:

- Detailed component breakdown
- Design patterns and decisions
- Integration strategies
- Future roadmap