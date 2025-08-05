+++
title = "Patch Package"
weight = 20
+++

# Patch Package Documentation

The patch package implements a powerful JSONPath-based declarative patching system for Kubernetes resources. It allows you to modify resources while preserving YAML structure, comments, and formatting.

## Documentation

### [Patch File Format Specification](/packages/patch/design)
Complete specification of the `.kpatch` file format, including:
- Syntax and structure
- Scope selection
- Operation types
- Examples and best practices

### [Patch Engine Design](/packages/patch/patch-engine-design)
Technical design documentation covering:
- Architecture overview
- Processing pipeline
- Implementation details
- Performance considerations

### [Path Resolution](/packages/patch/path-resolution)
Detailed explanation of how paths are resolved:
- JSONPath syntax support
- Array indexing and wildcards
- Complex path expressions
- Resolution algorithm

### [Error Handling](/packages/patch/error-handling)
Comprehensive error handling guide:
- Error types and categories
- Error recovery strategies
- Debugging patch issues
- Common problems and solutions

## Quick Example

```toml
[Deployment.my-app]
set.spec.replicas = 5
set.metadata.labels.environment = "production"
add.spec.template.spec.containers[name=app].env = [
  { name = "LOG_LEVEL", value = "info" }
]
```

## Features

- **Declarative**: Define what you want, not how to get there
- **Type-safe**: Operations are validated against resource schemas
- **Preserves formatting**: Maintains YAML comments and structure
- **Powerful selection**: Target resources by kind, name, labels, and more
- **Flexible operations**: Set, add, replace values with JSONPath precision

## Getting Started

1. Start with the [Patch File Format Specification](/packages/patch/design)
2. Review [examples](/examples/patches) to see patches in action
3. Understand [path resolution](/packages/patch/path-resolution) for complex selections
4. Learn about [error handling](/packages/patch/error-handling) for debugging