FROM python:3-alpine

COPY . /app

WORKDIR /app

RUN pip3 install -r requirements.txt
# ENV FLASK_DEBUG=1

CMD ["flask", "run", "-h", "0.0.0.0"]