FROM golang:1.21

ADD ./cmd/ /go/src/github.com/ffekirnew/go-project/concierge

RUN go install github.com/ffekirnew/go-project/concierge@latest

ENTRYPOINT /go/bin/concierge
