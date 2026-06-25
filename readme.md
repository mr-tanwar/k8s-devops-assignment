# k8s-devops-assignment

## Links

- **Code Repository**: https://github.com/mr-tanwar/k8s-devops-assignment
- **Docker Hub**: https://hub.docker.com/r/tanshubham10/k8s-api/tags
- **Live API URL**: http://34.131.166.35/employees

## Quick Test

```bash
# Check API is running
curl http://34.131.166.35/health

# View all employee records
curl http://34.131.166.35/employees

# Add a new employee
curl -X POST http://34.131.166.35/employees \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "role": "DevOps Engineer"}'
```

## How to run locally

1. Clone the repo

```bash
git clone https://github.com/mr-tanwar/k8s-devops-assignment.git
cd k8s-devops-assignment
npm install
```

2. Create a `.env` file

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=employeedb
DB_USER=postgres
DB_PASSWORD=postgres123
```

3. Run the app

```bash
npm run dev
```

## How to deploy on Kubernetes

Create your secret files first (see `k8s/postgres-secret.example.yaml` and `k8s/api-secret.example.yaml`), then:

```bash
kubectl apply -f k8s/postgres-secret.yaml
kubectl apply -f k8s/api-configmap.yaml
kubectl apply -f k8s/postgres-statefulset.yaml
kubectl apply -f k8s/postgres-service.yaml
kubectl apply -f k8s/api-secret.yaml
kubectl apply -f k8s/api-deployment.yaml
kubectl apply -f k8s/api-service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml
```

## Note on secrets

`postgres-secret.yaml` and `api-secret.yaml` are gitignored on purpose since they contain passwords. Use the `.example.yaml` versions as reference to create your own.
