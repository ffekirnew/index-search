FROM golang:1.21

ADD ./cmd/ /go/src/github.com/ffekirnew/go-project/librarian

RUN go install github.com/ffekirnew/go-project/librarian@latest

ENTRYPOINT /go/bin/librarian
