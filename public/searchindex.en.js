var relearn_searchindex = [
  {
    "breadcrumb": "Go Kure",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Architectures",
    "uri": "/architecture/index.html"
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
    "breadcrumb": "Go Kure",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Examples",
    "uri": "/examples/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Kure: Type-Safe Kubernetes Resource Generation Kure is a powerful Go library for programmatically building Kubernetes resources, designed specifically for GitOps workflows. Say goodbye to complex templating engines and hello to strongly-typed, composable resource generation.\nWhy Kure? Building Kubernetes manifests for GitOps can be challenging:\nYAML templating is error-prone and hard to maintain Helm charts add complexity with their templating language Raw manifests lead to duplication and inconsistency Kure solves these problems by providing:\nType-safe builders that catch errors at compile time Composable patterns for reusable resource generation Native Go code instead of template syntax GitOps-ready output for Flux and ArgoCD Features Comprehensive Resource Support\nCore Kubernetes resources (Deployments, Services, ConfigMaps, etc.) FluxCD resources (Kustomizations, HelmReleases, Sources) cert-manager integration External Secrets Operator MetalLB configuration Hierarchical Organization\nCluster → Node → Bundle → Application structure Logical grouping of related resources Clean directory layout generation Advanced Capabilities\nJSONPath-based patching system Multi-environment support OCI registry integration Validation and error handling Quick Start import \"github.com/go-kure/kure/pkg/fluxcd\" // Create a Flux Kustomization ks := fluxcd.CreateKustomization(\"my-app\", \"default\", kustv1.KustomizationSpec{ Path: \"./manifests\", SourceRef: kustv1.CrossNamespaceSourceReference{ Kind: \"GitRepository\", Name: \"my-repo\", }, }) Learn More Overview - Introduction and design philosophy Architecture - Deep dive into Kure’s design Packages - Explore the launcher system Examples - See Kure in action Get Involved Kure is open source and welcomes contributions!\nGitHub Repository Issue Tracker Discussions",
    "description": "Kure: Type-Safe Kubernetes Resource Generation Kure is a powerful Go library for programmatically building Kubernetes resources, designed specifically for GitOps workflows. Say goodbye to complex templating engines and hello to strongly-typed, composable resource generation.\nWhy Kure? Building Kubernetes manifests for GitOps can be challenging:\nYAML templating is error-prone and hard to maintain Helm charts add complexity with their templating language Raw manifests lead to duplication and inconsistency Kure solves these problems by providing:",
    "tags": [],
    "title": "Go Kure",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Go Kure",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Packages",
    "uri": "/packages/index.html"
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
