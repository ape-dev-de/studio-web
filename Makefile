.PHONY: help build build-multi test run push push-multi clean login setup-buildx

# Docker configuration
IMAGE_NAME = registry.ape-dev.de/ape-dev-studio
TAG ?= latest
PORT ?= 8080
PLATFORMS ?= linux/amd64,linux/arm64

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

setup-buildx: ## Set up Docker Buildx for multi-platform builds
	@echo "Setting up Docker Buildx..."
	@docker buildx create --name multiarch --driver docker-container --use 2>/dev/null || \
		docker buildx use multiarch 2>/dev/null || \
		echo "Buildx already configured"
	@docker buildx inspect --bootstrap
	@echo "Buildx setup complete!"

login: ## Login to container registry (prompts for credentials or reads from .registry-credentials file)
	@if [ -f .registry-credentials ]; then \
		echo "Logging in to registry.ape-dev.de using .registry-credentials..."; \
		. ./.registry-credentials && echo "$$REGISTRY_PASSWORD" | docker login registry.ape-dev.de \
			--username "$$REGISTRY_USERNAME" \
			--password-stdin; \
	else \
		echo "Logging in to registry.ape-dev.de..."; \
		docker login registry.ape-dev.de; \
	fi

build: ## Build the Docker image locally for current platform (fast, for testing)
	@echo "Building Docker image $(IMAGE_NAME):$(TAG) for current platform..."
	docker build -t $(IMAGE_NAME):$(TAG) .
	@echo "Build complete!"

build-multi: setup-buildx ## Build multi-architecture Docker image (AMD64 + ARM64) to cache only
	@echo "Building multi-arch Docker image $(IMAGE_NAME):$(TAG) for $(PLATFORMS)..."
	@echo "Note: Multi-arch images cannot be loaded locally. Use 'make push-multi' to push to registry."
	docker buildx build \
		--platform $(PLATFORMS) \
		-t $(IMAGE_NAME):$(TAG) \
		.
	@echo "Multi-arch build complete (cached, not loaded)!"

test: build ## Build and run the container locally for testing
	@echo "Starting container on http://localhost:$(PORT)..."
	docker run --rm -p $(PORT):80 $(IMAGE_NAME):$(TAG)

run: build ## Build and run the container in detached mode
	@echo "Starting container in background on http://localhost:$(PORT)..."
	docker run -d --name ape-dev-studio -p $(PORT):80 $(IMAGE_NAME):$(TAG)
	@echo "Container started. Use 'docker logs ape-dev-studio' to view logs."
	@echo "Use 'docker stop ape-dev-studio && docker rm ape-dev-studio' to stop."

push: build  ## Build for current platform and push the image to the registry
	@echo "Pushing $(IMAGE_NAME):$(TAG)..."
	docker push $(IMAGE_NAME):$(TAG)
	@echo "Push complete!"

push-multi: setup-buildx login ## Build and push multi-architecture image (AMD64 + ARM64) to registry
	@echo "Building and pushing multi-arch image $(IMAGE_NAME):$(TAG) for $(PLATFORMS)..."
	docker buildx build \
		--platform $(PLATFORMS) \
		-t $(IMAGE_NAME):$(TAG) \
		--push \
		.
	@echo "Multi-arch push complete!"

clean: ## Remove locally built images
	@echo "Cleaning up local images..."
	docker rmi $(IMAGE_NAME):$(TAG) 2>/dev/null || true
	@echo "Cleanup complete!"

stop: ## Stop and remove running container
	@echo "Stopping and removing container..."
	docker stop ape-dev-studio 2>/dev/null || true
	docker rm ape-dev-studio 2>/dev/null || true
	@echo "Container stopped!"
