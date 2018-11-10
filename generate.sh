cp assets/* docs/assets/
gitbook build
gitbook pdf ./ ./gitbook/build/ionic-book.pdf
gitbook epub ./ ./gitbook/build/ionic-book.epub
gitbook mobi ./ ./gitbook/build/ionic-book.mobi
