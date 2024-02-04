FROM golang:1.21

ADD . /go/src/github.com/random-starlord/index-search/concierge

RUN go install github.com/random-starlord/index-search/concierge@latest

ENTRYPOINT /go/bin/concierge
