# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "app/public/styles"
sass_dir = "app/public/styles"
images_dir = "images"
generated_images_dir = "app/public/images/generated"
fonts_dir = "fonts"
javascripts_dir = "app/public/js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = (environment == :production) ? :compressed : :expanded

relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass . scss && rm -rf sass && mv scss sass
