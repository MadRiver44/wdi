class PeopleController < ApplicationController
  def index
    if params[:id] == "1"
      render text: "Person #{params[:id]} loves Ruby on Rails!"
    else
      render text: 'Everyone loves Ruby on Rails!'
    end
  end

  def new
      #render text: 'Welcome!'
  end

  def create
    @person = Person.new(params[:person])
    @person.save

    redirect_to @person
  end

  def show
    @person = Person.find(params[:id])
  end

  def edit
    @person = Person.find(params[:id])
  end

  def update
    @person = Person.find(params[:id])
  end

  def destroy
    @person = Person.find(params[:id])
  end

  def person_params
    params.require(:person).permit(
      :username, :first_name, :last_name
    )
  end

end




