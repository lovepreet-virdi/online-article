# gdfgd
# rubocop:disable LineLength
# rubocop:disable Metrics/AbcSize
class ArticlesController < ApplicationController
  before_action :authenticate_user!
  def index
    @user = nil
    authorize! :index, :article
    @q = User.ransack(params[:q])
    @user = @q.result(distinct: true)
    if @user.count < User.all.count && @user.count != 0
      @articles = (Article.where('user_id IN (?) and publish = ?', @user.ids, true)).page(params[:page]).per(5)
    else
      @articles =  Article.where("publish = ? OR user_id = ? ", true , current_user.id).page(params[:page]).per(5)
    end
    # @articles = Article.where(user_id: @user.ids).page(params[:page]).per(5)
    
  end

  def new
    authorize! :create, :article
    @article = Article.new
  end

  def create
    authorize! :create, :article
    @article = Article.new(article_params)
    if @article.save
      flash[:success] = 'Article Created Successfully'
      redirect_to root_path
    else
      flash[:failure] = 'Article Creation failed'
      render new_article_path
    end
  end

  def show
    authorize! :index, :article
    @article = Article.find(params[:id])
    @article_comments = Comment.where(article_id: params[:id])
    @comment = Comment.new
    respond_to do |format|
      format.html
      format.pdf do
        render template: 'articles/article', pdf: @article.title
      end
    end
  end

  def update
    @article = Article.find(params[:id])
    authorize! :update, @article

    if @article.update_attributes(update_params)
      flash[:success] = 'Article Updated Successfully'
      redirect_to articles_path
    else
      flash[:failure] = 'Article Updation Failed'
      render action: 'articles#edit', template: 'articles/edit'
    end
  end

  def edit
    @article = Article.find(params[:id])
    authorize! :update, @article
  end

  def destroy
    @article = Article.find(params[:id])
    authorize! :destroy, @article
    @assign_article = Assign.find_by_article_id(params[:id])
    if @article.destroy && @assign_article.destroy
      flash[:success] = 'Article Destroyed Successfully'
    else
      flash[:failure] = 'Article Deletion Failed'
    end
    redirect_to articles_path
  end

  def review_article
    authorize! :review_article, :assign
    @articles = Assign.where(user_id: current_user.id).page(params[:page]).per(5)
  end

  def review_article1
    @article = Assign.find_by('article_id = ? and user_id = ?', params[:assign][:article_id], current_user.id)
    authorize! :review_article1, @article
    if params[:assign][:reviewer_status].present?
      if @article.update_attributes(reviewer_status: params[:assign][:reviewer_status])
        flash[:success] = 'Article Reviewed Successfully'
      else
        flash[:failure] = 'Article Review Failed'
      end
    else
      flash[:failure] = 'choose any action First'
    end
    redirect_to review_article_path
  end

  def updateusers
    @users = User.where.not('article_id = ? || role = ?', params[:id], true)
  end

  private

  def article_params
    params.require(:article).permit(:title, :description, :category, :user_id, :content, :file)
  end

  def update_params
    params.require(:article).permit(:title, :description, :category, :content, :file)
  end
end
