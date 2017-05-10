# rubocop:disable BlockLength
# rubocop:disable LineLength
ActiveRecord::Schema.define(version: 20_170_503_071_328) do
  create_table 'articles', force: :cascade do |t|
    t.string  'title'
    t.string  'description'
    t.string  'category'
    t.integer 'user_id'
    t.integer 'reviewer_id'
    t.text    'content', null: false
    t.string  'file'
    t.boolean 'publish', default: false
    t.index ['user_id'], name: 'index_articles_on_user_id'
  end

  create_table 'assigns', force: :cascade do |t|
    t.integer  'user_id'
    t.string   'reviewer_status', default: 'N/A'
    t.integer  'article_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['article_id'], name: 'index_assigns_on_article_id'
    t.index ['user_id'], name: 'index_assigns_on_user_id'
  end

  create_table 'comments', force: :cascade do |t|
    t.integer  'article_id'
    t.text     'comment'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer  'user_id'
    t.index ['article_id'], name: 'index_comments_on_article_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string   'name'
    t.boolean  'role', default: false
    t.string   'email', null: false
    t.string   'encrypted_password', default: '', null: false
    t.string   'provider'
    t.string   'uid'
    t.string   'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.integer  'sign_in_count', default: 0, null: false
    t.datetime 'current_sign_in_at'
    t.datetime 'last_sign_in_at'
    t.string   'current_sign_in_ip'
    t.string   'last_sign_in_ip'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string   'confirmation_token'
    t.datetime 'confirmed_at'
    t.datetime 'confirmation_sent_at'
    t.string   'unconfirmed_email'
    t.integer  'failed_attempts', default: 0, null: false
    t.string   'unlock_token'
    t.datetime 'locked_at'
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end
end
