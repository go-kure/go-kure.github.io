---
title: "Launcher Package"
weight: 10
description: "Kurel launcher - A declarative Kubernetes manifest generation system"
---

# Launcher Package

The launcher module is the core engine for the Kurel package system, implementing a declarative approach to generating Kubernetes manifests with validation and customization capabilities.

## Core Principle

**"Kurel just generates YAML"** - The launcher is a declarative system for generating Kubernetes manifests, not a runtime system or orchestrator.

## Documentation Overview

The launcher package includes comprehensive documentation covering design, implementation, and usage:

### Package Documentation

- [**README**]({{% relref "readme" %}}) - Package overview, API reference, and quick start guide

### Design Documents

- [**Design Overview**]({{% relref "design" %}}) - High-level design and architecture of the launcher module
- [**Design Details**]({{% relref "design-details" %}}) - Detailed technical specifications and implementation notes

### Implementation Documentation

- [**Code Design**]({{% relref "code-design" %}}) - All design decisions made during the architecture planning phase, including:
  - Core package structure and separation of concerns
  - Interface organization and module layout
  - Error handling philosophy
  - Variable resolution strategy
  - Patch processing architecture
  - Schema generation approach
  - Validation system design

- [**Implementation Plan**]({{% relref "code-implementation-plan" %}}) - Detailed implementation roadmap including:
  - Phase-by-phase development plan
  - Concrete code examples and patterns
  - Testing strategy and coverage targets
  - Performance benchmarks
  - 4-week implementation timeline

## Key Features

### Package Management
- **Immutable package definitions** with clear separation from user state
- **Hierarchical parameter system** with deep merging capabilities
- **Local extensions** for environment-specific customizations
- **Package validation** with comprehensive error reporting

### Variable Resolution
- **Smart variable substitution** with `${var}` syntax
- **Circular dependency detection** to prevent infinite loops
- **Configurable nesting depth** for complex variable references
- **Type-safe parameter merging** with validation

### Patch System
- **Declarative patches** using TOML format
- **Automatic dependency resolution** with patch ordering
- **Conflict detection** between incompatible patches
- **Conditional enabling** based on parameters
- **Local patches** that can reference package patches

### Schema & Validation
- **Automatic schema generation** from package parameters
- **Kubernetes resource validation** against API schemas
- **CRD support** through configurable schema URLs
- **Multi-level validation** (errors block, warnings advise)

### Output Generation
- **Multiple output formats**: single file, by-kind, by-resource
- **YAML and JSON** output support
- **GitOps-ready** manifest generation
- **Streaming output** for large manifest sets

## Architecture

The launcher follows a modular architecture with clear separation of concerns:

```
Package Loading → Variable Resolution → Patch Processing → Validation → Output Generation
```

Each stage is implemented as a separate interface, allowing for:
- Independent testing and development
- Clear error boundaries
- Extensibility through interface implementation
- Performance optimization at each stage

## Usage Example

```bash
# Build manifests from a kurel package
kurel build my-app.kurel/

# With custom values
kurel build my-app.kurel/ -f values.yaml

# Output to directory with organization
kurel build my-app.kurel/ -o manifests/ --format=by-kind

# Validate package without building
kurel validate my-app.kurel/

# Generate schema for parameters
kurel schema my-app.kurel/ > schema.json
```

## Package Structure

A typical Kurel package follows this structure:

```
my-app.kurel/
├── parameters.yaml       # Package metadata and default parameters
├── resources/           # Base Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   └── configmap.yaml
└── patches/            # Optional patches for customization
    ├── 10-monitoring.kpatch
    └── 20-scaling.kpatch
```

## Local Extensions

Local extensions allow environment-specific customizations without modifying the base package:

```
my-app.local.kurel/
├── parameters.yaml      # Override/extend parameters
└── patches/            # Additional patches
    └── 50-production.kpatch
```

## Development Status

The launcher module is under active development. See the [Implementation Plan]({{% relref "code-implementation-plan" %}}) for the current roadmap and timeline.

## Related Packages

- [**Patch Engine**]({{% relref "../patch" %}}) - JSONPath-based patching system used by the launcher
- [**Layout**]({{% relref "../layout" %}}) - Manifest organization and directory structure
- **Stack** - Domain model for Kubernetes resources