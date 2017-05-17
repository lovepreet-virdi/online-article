# gdfgd
module ArticlesHelper
  def users_list
    # User.where.not('id= ? or role = ?', article.user_id, true)
  end

  def categories
    # rubocop:disable LineLength
    ['Art and entertainment', 'Cars and Other Vehicles', 'Computers & Electronics', 'Education & Communications', 'Family Life', 'Finance & Business', 'Food & Entertaining', 'Health', 'Hobbies & Crafts', 'Holidays & Traditions', 'Home and Garden', 'Personal Care and Style', 'Pets and Animals', 'Philosophy and Religion', 'Relationships', 'Sports and Fiteness', 'Travel', 'Work World', 'Youth']
  end

  def users_for_assign
    User.where.not('id = ? or id = ?', article.user_id, current_user)
  end

  def users(article)
    User.where.not('id = ? or role = ?', article.user_id, true)
  end

  def review_articles(article)
    Article.find(article)
  end
  def article_owner(article)
    User.find(article.user_id)
  end
end
