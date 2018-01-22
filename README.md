# README

My Contacts is a simple React-on-Rails application to create a list of contacts.

Key Dependencies:
Rails v 5.1.4
React-on-Rails v 10.0.2
Webpacker
PostgreSQL

To run:
$ git clone  \n https://github.com/TimBrowne066/address_book \n
$ cd into directory \n
$ bundle install \n
$ yarn \n
$ rake db:create \n
$ rake db:migrate \n
$ foreman start -f Procfile.dev-server \n

Test dependencies:
Rspec
Capybara
selenium-webdriver
phantomjs
poltergeist

Tests will be run live via selenium Chrome.  A browser window will pop up.

To run tests:
$ rake db:test:prepare  \n
$ rake  \n
