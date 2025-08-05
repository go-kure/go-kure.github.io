+++
title = "Overview"
weight = 10
+++

# Project Overview

Welcome to Kure - a Go library for programmatically building Kubernetes resources for GitOps workflows.

{{< notice warning >}}
⚠️ Work in Progress: Kure is currently under active development and has not been released yet. APIs and features are subject to change. Use at your own risk.
{{< /notice >}}

## What is Kure?

Kure provides a type-safe, programmatic approach to generating Kubernetes manifests. Instead of wrestling with YAML templates or complex templating engines, you write Go code that produces clean, consistent Kubernetes resources.

## Key Benefits

- **Type Safety**: Catch errors at compile time, not runtime
- **No Templates**: Write Go code instead of template syntax
- **GitOps Ready**: Generate manifests perfect for Flux and ArgoCD
- **Composable**: Build reusable components and patterns
- **Comprehensive**: Support for core K8s, Flux, cert-manager, and more

## Getting Started

Check out the [detailed README](/overview/readme) for installation instructions, examples, and API documentation.

## Next Steps

- [Architecture](/architecture) - Understand Kure's design
- [Packages](/packages) - Explore available packages
- [Examples](/examples) - See Kure in action