# comment module
module CommentsHelper
  def name(user)
    User.find(user).name
  end
end
