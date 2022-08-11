FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN (Y | sdk install java 15.0.1-open || true)