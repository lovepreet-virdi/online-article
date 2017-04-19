# gdfgd
class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  def new
    @user = User.new
    @user_articles = @user.assigns
  end
  
  def create
  end

  def update
  end

  def show
  end

  def edit
  end

  def destroy
  end
end
