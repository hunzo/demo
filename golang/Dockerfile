FROM golang:alpine as build 

WORKDIR /app

ADD . .

RUN CGO_ENABLED=0 GOOS=linux go build -o demo


FROM scratch as production

COPY --from=build /app/demo .

# RUN apk add tzdata

ENV TZ=Asia/Bangkok

CMD ["/demo"]