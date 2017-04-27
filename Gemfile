source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = '#{repo_name}/#{repo_name}' unless repo_name.include?('/')
  'https://github.com/#{repo_name}.git'
end
gem 'bootstrap-sass'
gem 'cancancan'
gem 'carrierwave'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
gem 'devise'
gem 'font-awesome-sass'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'kaminari'
gem 'letter_opener', group: :development
gem 'link_with_icon'
gem 'mini_magick'
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-github'
gem 'omniauth-twitter'
# Use Puma as the app server
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.0.2'
gem 'rails_admin', '~> 1.1.1'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

gem 'tinymce-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary'
group :development, :test do
  # Call 'byebug'
  gem 'byebug', platform: :mri
  gem 'sqlite3'
end
group :production do
  gem 'pg'
  gem 'rails_12factor'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # Access an IRB console on exception pages or by using <%= console %>
  gem 'web-console', '>= 3.3.0'
  gem 'sqlite3'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
