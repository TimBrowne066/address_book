# README

My Contacts is a simple React-on-Rails application to create a list of contacts.

Key Dependencies:
Rails v 5.1.4
React-on-Rails v 10.0.2
Webpacker
PostgreSQL

To run:
$ git clone   https://github.com/TimBrowne066/address_book
$ cd into directory
$ bundle install
$ yarn
$ rake db:create
$ rake db:migrate
$ foreman start -f Procfile.dev-server

Test dependencies:
Rspec
Capybara
selenium-webdriver
phantomjs
poltergeist

Tests will be run live via selenium Chrome.  A browser window will pop up.

To run tests:
$ rake db:test:prepare
$ rake
