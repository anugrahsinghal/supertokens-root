FROM gitpod/workspace-full

ARG JAVA_VERSION="15.0.1-open"
ARG GRADLE_VERSION="7.0"

RUN bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && \
    rm -rf $HOME/.sdkman/candidates/java/* && \
    yes | sdk install java $JAVA_VERSION && \
    yes | sdk install gradle $GRADLE_VERSION && \
    rm -rf $HOME/.sdkman/archives/* && \
    rm -rf $HOME/.sdkman/tmp/*"