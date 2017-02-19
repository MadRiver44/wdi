# Active Record Associations
This [Rails Guides Chapter](http://guides.rubyonrails.org/association_basics.html)
on ActiveRecord associations has everything you need to know and more.

### `has_many` and `belongs_to`
- Migration for the `belongs_to` model needs a `belongs_to` column which serves
  as the foreign key.
- `dependent: :destroy` and `dependent: :nullify`

### `has_and_belongs_to_many` and `has_many :through`
- Migration for the join model needs two `belongs_to` columns that serve
  as the foreign keys for the two other tables.

# React on rails

The [React on Rails documentation](https://github.com/shakacode/react_on_rails)
is extensive and will provide you with nearly everything you need to get started.

### Installing

Add to your Gemfile:
```ruby
gem "react_on_rails", "~> 6"
```

Install the gem.
```
bundle
```

Run the generator
```
rails generate react_on_rails:install
```

Download the dependencies
```
bundle && npm install
```

Install foreman, a process manager (for running webpack and rails server at the
same time)
```
gem install foreman
```

Start foreman
```
foreman start -f Procfile.dev
```

### Adding a new bundle

Chances are you are only going to need one webpack bundle for your single page
app. When you run the react on rails generator you are set up with a HelloWorld
bundle. The easiest way to get up and running is just to use that one and rename
it.

**NOTE** when you change everything from `HelloWorld` to whatever you want to
change it to, make sure you also edit the `client/webpack.config.js` file (line
16). This part of the config tell Webpack where to find the entry file for the
bundles you want to make.

### Using the Rails backend as a JSON API

#### Routing

Go to your routes file and add the following:
```ruby
namespace :api, as: :api do
  resources :posts, only: [:create, :update, :index, :show, :destroy]
  # ... any other routes you want in your api namespace
end
```
Note: The `:posts` resources is arbitrary. These api routes will be specific to
your project.

Try running `rails routes` and see what that gives you.

#### Controllers

The namespace dictates that the controllers handling requests to the namespaced
routes have to be in a module with the same name. In your controllers folder,
create an `api` directory. All of the api controllers will go in here.

Add a `posts_controller.rb` file to the `app/controllers/api` directory. Fill it
with this:
```ruby
module Api
  class PostsController < ApplicationController
    def create
      head :created
      # this is just returning a header with the status code 201 (created).
      # you would be trying to create a Post here. If it saves then you could
      # return `head :created`, otherwise, you could return a json body with an
      # errors and a status of 422
    end
  end
end
```
Remember this is a JSON API so we should be returning json response bodies from
our controller actions. Rails provides a handy `to_json` method which will
convert many Ruby objects to json strings automagically. If we had a Post model,
we could have index and show routes that looked like this:
```ruby
def index
  posts = Post.all
  render json: posts.to_json
end

def show
  post = Post.find(params[:id])
  render json: post.to_json
end
```

In your `app/controllers/application_controller.rb` file, comment out the
`protect_from_forgery` line (line 2). In the beginning its easier to just ignore
the csrf protection when submitting api requests for POST, PUT and DELETE
actions. The React on Rails documentation has instruction for how to add this
protection back later on if you are so inclined.

In `app/views/hello_world/index.html.erb` add a prop for the `api_posts_url`.

Now in your `client/app/bundles/HelloWorld/components/HelloWorld.jsx`, change
the `updateName` function to make POST request to the `Api::PostsController`
sending the `name` as a JSON payload.

## NOTES
1. When adding new frontend dependencies, just cd into your `/client` directory
   and`npm install` things as usual.
2. Put styles in `app/assets/stylesheets`. You can use `.css` files or `.scss`
   files. Rails will automatically preprocess the SCSS for you without you
   having to run any commands or worry about a map file.
