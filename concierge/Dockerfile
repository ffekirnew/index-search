FROM golang:1.21
 
WORKDIR /app
 
COPY . .
 
RUN go mod download
 
RUN go build -o /godocker ./cmd/main.go
 
CMD [ "/godocker" ]
