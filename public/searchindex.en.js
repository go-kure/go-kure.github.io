var relearn_searchindex = [
  {
    "breadcrumb": "Go Kure",
    "content": "Project Overview Welcome to Kure - a Go library for programmatically building Kubernetes resources for GitOps workflows.\nWarning ⚠️ Work in Progress: Kure is currently under active development and has not been released yet. APIs and features are subject to change. Use at your own risk. What is Kure? Kure provides a type-safe, programmatic approach to generating Kubernetes manifests. Instead of wrestling with YAML templates or complex templating engines, you write Go code that produces clean, consistent Kubernetes resources.\nKey Benefits Type Safety: Catch errors at compile time, not runtime No Templates: Write Go code instead of template syntax GitOps Ready: Generate manifests perfect for Flux and ArgoCD Composable: Build reusable components and patterns Comprehensive: Support for core K8s, Flux, cert-manager, and more Getting Started Check out the detailed README for installation instructions, examples, and API documentation.\nNext Steps Architecture - Understand Kure’s design Packages - Explore available packages Examples - See Kure in action",
    "description": "Project Overview Welcome to Kure - a Go library for programmatically building Kubernetes resources for GitOps workflows.\nWarning ⚠️ Work in Progress: Kure is currently under active development and has not been released yet. APIs and features are subject to change. Use at your own risk. What is Kure? Kure provides a type-safe, programmatic approach to generating Kubernetes manifests. Instead of wrestling with YAML templates or complex templating engines, you write Go code that produces clean, consistent Kubernetes resources.",
    "tags": [],
    "title": "Overview",
    "uri": "/overview/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "Getting Started with Kure This guide will help you get up and running with Kure quickly.\nInstallation go get github.com/go-kure/kure Quick Example Here’s a simple example creating a Kubernetes Deployment:\npackage main import ( \"github.com/go-kure/kure/pkg/kubernetes\" \"github.com/go-kure/kure/pkg/io\" ) func main() { // Create a deployment deployment := kubernetes.CreateDeployment(\"my-app\", \"default\") kubernetes.AddDeploymentContainer(deployment, \"app\", \"nginx:latest\") kubernetes.SetDeploymentReplicas(deployment, 3) // Output as YAML printer := io.NewPrinter() printer.PrintObj(deployment) } Next Steps Explore the Packages: Learn about the available packages Read the Architecture: Understand how Kure works Try Examples: See real-world examples Join the Community: Contribute to the GitHub repository Resources API Documentation GitHub Repository Issue Tracker",
    "description": "Getting Started with Kure This guide will help you get up and running with Kure quickly.\nInstallation go get github.com/go-kure/kure Quick Example Here’s a simple example creating a Kubernetes Deployment:\npackage main import ( \"github.com/go-kure/kure/pkg/kubernetes\" \"github.com/go-kure/kure/pkg/io\" ) func main() { // Create a deployment deployment := kubernetes.CreateDeployment(\"my-app\", \"default\") kubernetes.AddDeploymentContainer(deployment, \"app\", \"nginx:latest\") kubernetes.SetDeploymentReplicas(deployment, 3) // Output as YAML printer := io.NewPrinter() printer.PrintObj(deployment) } Next Steps Explore the Packages: Learn about the available packages Read the Architecture: Understand how Kure works Try Examples: See real-world examples Join the Community: Contribute to the GitHub repository Resources API Documentation GitHub Repository Issue Tracker",
    "tags": [],
    "title": "Getting Started",
    "uri": "/getting-started/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "Architecture This section covers the architectural design and implementation details of Kure.\nDesign Philosophy Kure is built on several core principles:\nType Safety First: Use Go’s type system to catch errors early Composability: Build complex configurations from simple, reusable parts No Magic: Explicit is better than implicit GitOps Native: Output designed for version control and automation Core Concepts Hierarchical Domain Model: Cluster → Node → Bundle → Application Builder Pattern: Fluent APIs for resource construction Strategy Pattern: Pluggable resource generation strategies Clean Separation: Domain logic separate from serialization Learn More Read the full architecture documentation for an in-depth exploration of Kure’s design, including:\nDetailed component breakdown Design patterns and decisions Integration strategies Future roadmap",
    "description": "Architecture This section covers the architectural design and implementation details of Kure.\nDesign Philosophy Kure is built on several core principles:\nType Safety First: Use Go’s type system to catch errors early Composability: Build complex configurations from simple, reusable parts No Magic: Explicit is better than implicit GitOps Native: Output designed for version control and automation Core Concepts Hierarchical Domain Model: Cluster → Node → Bundle → Application Builder Pattern: Fluent APIs for resource construction Strategy Pattern: Pluggable resource generation strategies Clean Separation: Domain logic separate from serialization Learn More Read the full architecture documentation for an in-depth exploration of Kure’s design, including:",
    "tags": [],
    "title": "Architecture",
    "uri": "/architecture/index.html"
  },
  {
    "breadcrumb": "Go Kure \u003e Packages",
    "content": "Patch Package Documentation The patch package implements a powerful JSONPath-based declarative patching system for Kubernetes resources. It allows you to modify resources while preserving YAML structure, comments, and formatting.\nDocumentation Patch File Format Specification Complete specification of the .kpatch file format, including:\nSyntax and structure Scope selection Operation types Examples and best practices Patch Engine Design Technical design documentation covering:\nArchitecture overview Processing pipeline Implementation details Performance considerations Path Resolution Detailed explanation of how paths are resolved:\nJSONPath syntax support Array indexing and wildcards Complex path expressions Resolution algorithm Error Handling Comprehensive error handling guide:\nError types and categories Error recovery strategies Debugging patch issues Common problems and solutions Quick Example [Deployment.my-app] set.spec.replicas = 5 set.metadata.labels.environment = \"production\" add.spec.template.spec.containers[name=app].env = [ { name = \"LOG_LEVEL\", value = \"info\" } ] Features Declarative: Define what you want, not how to get there Type-safe: Operations are validated against resource schemas Preserves formatting: Maintains YAML comments and structure Powerful selection: Target resources by kind, name, labels, and more Flexible operations: Set, add, replace values with JSONPath precision Getting Started Start with the Patch File Format Specification Review examples to see patches in action Understand path resolution for complex selections Learn about error handling for debugging",
    "description": "Patch Package Documentation The patch package implements a powerful JSONPath-based declarative patching system for Kubernetes resources. It allows you to modify resources while preserving YAML structure, comments, and formatting.\nDocumentation Patch File Format Specification Complete specification of the .kpatch file format, including:\nSyntax and structure Scope selection Operation types Examples and best practices Patch Engine Design Technical design documentation covering:\nArchitecture overview Processing pipeline Implementation details Performance considerations Path Resolution Detailed explanation of how paths are resolved:",
    "tags": [],
    "title": "Patch Package",
    "uri": "/packages/patch/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "Kure Packages Explore the core packages that make up the Kure library. Each package provides specific functionality for building and managing Kubernetes resources.\nCore Packages Launcher The launcher package (formerly kurel) provides a package system for creating reusable, customizable Kubernetes applications without the complexity of templating engines. It uses a declarative patch-based approach to customize base Kubernetes manifests.\nPatch The patch package implements a JSONPath-based declarative patching system. It allows you to modify Kubernetes resources using a simple, powerful patch language that maintains YAML structure and comments.\nLayout The layout package handles manifest organization and directory structure generation. It provides flexible rules for grouping and organizing generated Kubernetes resources into a clean directory structure.\nWorkflow The workflow package provides interfaces and abstractions for building GitOps workflows. It enables integration with tools like Flux and ArgoCD.\nAdditional Resources Architecture Overview - Understand how these packages fit together Examples - See the packages in action API Documentation - Detailed API reference",
    "description": "Kure Packages Explore the core packages that make up the Kure library. Each package provides specific functionality for building and managing Kubernetes resources.\nCore Packages Launcher The launcher package (formerly kurel) provides a package system for creating reusable, customizable Kubernetes applications without the complexity of templating engines. It uses a declarative patch-based approach to customize base Kubernetes manifests.\nPatch The patch package implements a JSONPath-based declarative patching system. It allows you to modify Kubernetes resources using a simple, powerful patch language that maintains YAML structure and comments.",
    "tags": [],
    "title": "Packages",
    "uri": "/packages/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "Examples Learn how to use Kure through practical examples and use cases.\nAvailable Examples Patch Examples Comprehensive examples demonstrating the patch system capabilities, including:\nBasic patching operations Complex transformations Working with arrays and objects Preserving YAML structure and comments More Examples Coming Soon We’re actively developing more examples to help you get started with Kure:\nComplete cluster configurations Multi-environment setups Integration with Flux and ArgoCD Real-world use cases Check back soon or contribute your own examples!",
    "description": "Examples Learn how to use Kure through practical examples and use cases.\nAvailable Examples Patch Examples Comprehensive examples demonstrating the patch system capabilities, including:\nBasic patching operations Complex transformations Working with arrays and objects Preserving YAML structure and comments More Examples Coming Soon We’re actively developing more examples to help you get started with Kure:\nComplete cluster configurations Multi-environment setups Integration with Flux and ArgoCD Real-world use cases Check back soon or contribute your own examples!",
    "tags": [],
    "title": "Examples",
    "uri": "/examples/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "Resources \u0026 Reference Additional resources to help you work with Kure.\nAPI Reference Go Package Documentation - Complete API reference Source Code - Browse the source on GitHub Community GitHub Discussions - Ask questions and share ideas Issue Tracker - Report bugs or request features Contributing Guide - Learn how to contribute Related Projects Flux - GitOps toolkit for Kubernetes ArgoCD - Declarative GitOps CD for Kubernetes cert-manager - X.509 certificate management for Kubernetes External Secrets Operator - Integrate external secret management systems Learning Resources Kubernetes Documentation - Official Kubernetes docs Go Documentation - Official Go documentation GitOps Principles - Learn about GitOps Tools \u0026 Integration kubectl - Kubernetes command-line tool kustomize - Kubernetes native configuration management Helm - The package manager for Kubernetes",
    "description": "Resources \u0026 Reference Additional resources to help you work with Kure.\nAPI Reference Go Package Documentation - Complete API reference Source Code - Browse the source on GitHub Community GitHub Discussions - Ask questions and share ideas Issue Tracker - Report bugs or request features Contributing Guide - Learn how to contribute Related Projects Flux - GitOps toolkit for Kubernetes ArgoCD - Declarative GitOps CD for Kubernetes cert-manager - X.509 certificate management for Kubernetes External Secrets Operator - Integrate external secret management systems Learning Resources Kubernetes Documentation - Official Kubernetes docs Go Documentation - Official Go documentation GitOps Principles - Learn about GitOps Tools \u0026 Integration kubectl - Kubernetes command-line tool kustomize - Kubernetes native configuration management Helm - The package manager for Kubernetes",
    "tags": [],
    "title": "Resources",
    "uri": "/resources/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Kure: Type-Safe Kubernetes Resource Generation Warning ⚠️ Work in Progress: Kure is currently under active development and has not been released yet. APIs and features are subject to change. Use at your own risk. Kure is a powerful Go library for programmatically building Kubernetes resources, designed specifically for GitOps workflows. Say goodbye to complex templating engines and hello to strongly-typed, composable resource generation.\nWhy Kure? Building Kubernetes manifests for GitOps can be challenging:\nYAML templating is error-prone and hard to maintain Helm charts add complexity with their templating language Raw manifests lead to duplication and inconsistency Kure solves these problems by providing:\nType-safe builders that catch errors at compile time Composable patterns for reusable resource generation Native Go code instead of template syntax GitOps-ready output for Flux and ArgoCD Features Comprehensive Resource Support\nCore Kubernetes resources (Deployments, Services, ConfigMaps, etc.) FluxCD resources (Kustomizations, HelmReleases, Sources) cert-manager integration External Secrets Operator MetalLB configuration Hierarchical Organization\nCluster → Node → Bundle → Application structure Logical grouping of related resources Clean directory layout generation Advanced Capabilities\nJSONPath-based patching system Multi-environment support OCI registry integration Validation and error handling Quick Start import \"github.com/go-kure/kure/pkg/fluxcd\" // Create a Flux Kustomization ks := fluxcd.CreateKustomization(\"my-app\", \"default\", kustv1.KustomizationSpec{ Path: \"./manifests\", SourceRef: kustv1.CrossNamespaceSourceReference{ Kind: \"GitRepository\", Name: \"my-repo\", }, }) Learn More Overview - Introduction and design philosophy Architecture - Deep dive into Kure’s design Packages - Explore the launcher system Examples - See Kure in action Get Involved Kure is open source and welcomes contributions!\nGitHub Repository Issue Tracker Discussions",
    "description": "Kure: Type-Safe Kubernetes Resource Generation Warning ⚠️ Work in Progress: Kure is currently under active development and has not been released yet. APIs and features are subject to change. Use at your own risk. Kure is a powerful Go library for programmatically building Kubernetes resources, designed specifically for GitOps workflows. Say goodbye to complex templating engines and hello to strongly-typed, composable resource generation.",
    "tags": [],
    "title": "Go Kure",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
