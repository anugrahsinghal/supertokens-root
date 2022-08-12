FROM gitpod/workspace-full

ARG JAVA_VERSION="15.0.1-open"

RUN bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && \
    rm -rf $HOME/.sdkman/candidates/java/* && \
    yes | sdk install java $JAVA_VERSION && \
    sdk use java $JAVA_VERSION && \
    rm -rf $HOME/.sdkman/archives/* && \
    rm -rf $HOME/.sdkman/tmp/*"
