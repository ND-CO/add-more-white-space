# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

#Directory Index
# activate :directory_indexes

# Live Reload
configure :development do
 activate :livereload
end

# configure :build do
#     activate :minify_html do |html|
#     html.remove_quotes = false
#     html.remove_intertag_spaces = true
#    end
#   activate :gzip
# end

# CircleCI 
configure :staging do
    activate :s3_sync do |s3_sync|
      s3_sync.bucket                = 'staging.addmorewhite.space'
      s3_sync.region                = 'us-east-1'
  end
end

configure :production do
    activate :s3_sync do |s3_sync|
      s3_sync.bucket                = 'addmorewhite.space'
      s3_sync.region                = 'us-east-1'
  end
end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end
