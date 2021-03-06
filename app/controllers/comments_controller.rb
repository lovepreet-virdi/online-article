# comment controller
# rubocop:disable LineLength
# rubocop:disable Metrics/AbcSize
class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /comments
  # GET /comments.json
  def index
    authorize! :index, :comment
    @comments = Comment.all
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    authorize! :index, :comment
  end

  # GET /comments/new
  def new
    authorize! :create, :comment
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
    @comment = Comment.find(params[:id])
    authorize! :update, @comment
    respond_to do |format|
      format.js
    end
  end

  # POST /comments
  # POST /comments.json
  def create
    authorize! :create, :comment
    @comment = Comment.new(comment_params)
    respond_to do |format|
      if @comment.save
        format.html { redirect_to article_path(params[:comment][:article_id]), notice: 'Comment was successfully created.' }
        format.js
      else
        format.html { render :new }
      end
    end
  end
  
 
  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      authorize! :update, @comment
      if @comment.update(comment_params)
        format.html { redirect_to article_path(@comment.article_id), notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    authorize! :destroy, @comment
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to article_path(@comment.article_id), notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.require(:comment).permit(:comment, :article_id, :user_id)
  end
end
