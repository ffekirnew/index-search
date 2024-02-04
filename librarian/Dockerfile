FROM golang:1.21

ADD . /go/src/github.com/random-starlord/index-search/librarian

RUN go install github.com/random-starlord/index-search/librarian@latest

ENTRYPOINT /go/bin/librarian
