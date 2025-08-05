+++
title = "Packages"
weight = 30
+++

# Kure Packages

Explore the core packages that make up the Kure library. Each package provides specific functionality for building and managing Kubernetes resources.

## Core Packages

### [Launcher](/packages/launcher)
The launcher package (formerly kurel) provides a package system for creating reusable, customizable Kubernetes applications without the complexity of templating engines. It uses a declarative patch-based approach to customize base Kubernetes manifests.

### [Patch](/packages/patch)
The patch package implements a JSONPath-based declarative patching system. It allows you to modify Kubernetes resources using a simple, powerful patch language that maintains YAML structure and comments.

### [Layout](/packages/layout)
The layout package handles manifest organization and directory structure generation. It provides flexible rules for grouping and organizing generated Kubernetes resources into a clean directory structure.

### [Workflow](/packages/workflow)
The workflow package provides interfaces and abstractions for building GitOps workflows. It enables integration with tools like Flux and ArgoCD.

## Additional Resources

- [Architecture Overview](/architecture) - Understand how these packages fit together
- [Examples](/examples/patches) - See the packages in action
- [API Documentation](https://pkg.go.dev/github.com/go-kure/kure) - Detailed API reference