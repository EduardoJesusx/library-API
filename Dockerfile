FROM ruby:3.1.4

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

# ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]