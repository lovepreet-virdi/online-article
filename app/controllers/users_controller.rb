# gdfgd
class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    # dfvfd
  end

  def new
    @user = User.new
    @user_articles = @user.assigns
  end

  def create
    # gfsdf
  end

  def update
    # dgfsd
  end

  def show
    # zdfgfd
  end

  def edit
    # dvgdfvg
  end

  def destroy
    # fdsf
  end
end
