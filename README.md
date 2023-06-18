# Observability Workshop Manifests

Welcome to the Observability Workshop repository! Here you will find a collection of manifest files used during our workshop on the 20th of June. These manifests are designed to help you explore observability in Kubernetes, add metrics to your applications, and experience automatic scaling using the Horizontal Pod Autoscaler (HPA).

## Prerequisites
To make the most of this workshop, ensure that you have the following prerequisites in place:
- Access to a Kubernetes cluster
- Basic knowledge of containers and Kubernetes concepts

## Manifest Files
This repository contains the following manifest files:

1. `nginx.yaml`: Deploy this manifest to set up a sample deployment, service, and ingress object. We will scrape metrics from this nginx deployment as part of the workshop.

2. `prometheus-monitor.yaml`: Use this manifest to deploy the Prometheus Operator and its custom resource definition (CRD). The Prometheus Operator simplifies the management of Prometheus instances in Kubernetes.

3. `prometheus.yaml`: Deploy this manifest to create a Prometheus server. Prometheus is a popular monitoring and alerting toolkit that collects metrics from various sources.

4. `servicemonitor.yaml`: Use this manifest to configure a ServiceMonitor object that instructs Prometheus on how to scrape metrics from our sample nginx deployment.

Feel free to explore, modify, and experiment with these manifest files during the workshop. We encourage you to dive into the configurations and adapt them to your specific use cases.

## Getting Started
To get started with the workshop, follow these steps:

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/guusbeckett/devdays2023.git
   ```

2. Navigate to the cloned repository:
   ```
   cd devdays2023
   ```

3. Deploy the manifest files using the `kubectl apply` command:
   ```
   kubectl apply -f nginx.yaml
   kubectl apply -f prometheus-monitor.yaml
   kubectl apply -f prometheus.yaml
   kubectl apply -f servicemonitor.yaml
   ```

4. Dive into the workshop and explore the possibilities of observability in Kubernetes! Feel free to consult the workshop materials or reach out to our instructors for guidance.

## Additional Resources
For additional resources and references related to observability in Kubernetes, check out the following links:

- [Kubernetes Documentation](https://kubernetes.io/docs/home/): Official documentation for Kubernetes.
- [Prometheus Documentation](https://prometheus.io/docs/): Official documentation for Prometheus, a popular monitoring and alerting toolkit.
- [Horizontal Pod Autoscaler (HPA) Documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/): Learn more about the Horizontal Pod Autoscaler and how to configure it for your applications.

## Workshop Details
- Date: 20th June
- Location: Breda
- Workshop Duration: 3 hours + lunch break

Please ensure that you have the necessary prerequisites ready before attending the workshop. We look forward to exploring the exciting world of observability in Kubernetes with you!

If you have any questions or need assistance, feel free to reach out to our workshop instructors. Happy exploring and enjoy the workshop!
