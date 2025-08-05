+++
title = "Getting Started"
weight = 15
+++

# Getting Started with Kure

This guide will help you get up and running with Kure quickly.

## Installation

```bash
go get github.com/go-kure/kure
```

## Quick Example

Here's a simple example creating a Kubernetes Deployment:

```go
package main

import (
    "github.com/go-kure/kure/pkg/kubernetes"
    "github.com/go-kure/kure/pkg/io"
)

func main() {
    // Create a deployment
    deployment := kubernetes.CreateDeployment("my-app", "default")
    kubernetes.AddDeploymentContainer(deployment, "app", "nginx:latest")
    kubernetes.SetDeploymentReplicas(deployment, 3)
    
    // Output as YAML
    printer := io.NewPrinter()
    printer.PrintObj(deployment)
}
```

## Next Steps

1. **Explore the Packages**: Learn about the [available packages](/packages)
2. **Read the Architecture**: Understand [how Kure works](/architecture)
3. **Try Examples**: See [real-world examples](/examples)
4. **Join the Community**: Contribute to the [GitHub repository](https://github.com/go-kure/kure)

## Resources

- [API Documentation](https://pkg.go.dev/github.com/go-kure/kure)
- [GitHub Repository](https://github.com/go-kure/kure)
- [Issue Tracker](https://github.com/go-kure/kure/issues)