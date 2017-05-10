# Use this hook to configure devise mailer, warden hooks and so forth.
# Many of these configuration options can be set straight in your model.
Devise::TRUE_VALUES << ['on']
Devise.setup do |config|
  config.mailer = 'Devise::Mailer'
  config.omniauth :github, '7e30146a9b8096bc00f0', '9dfe76eb0afb8ba42fd80b8981a34cda5995aede', scope: 'user:email, user:name'
  config.mailer_sender = 'devise@example.com'
  require 'devise/orm/active_record'
  config.case_insensitive_keys = [:email]
  config.strip_whitespace_keys = [:email]
  config.skip_session_storage = [:http_auth]
  config.stretches = Rails.env.test? ? 1 : 11
  config.reconfirmable = true
  config.expire_all_remember_me_on_sign_out = false
  config.password_length = 6..128
  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/
  config.reset_password_within = 6.hours
  config.sign_out_via = :delete
  config.secret_key = '598ce9cdb940cf4f436314ff56c2310cce9a72461b8d1023f3c6b989fda19599e20b392925915d817dac286bc2db2bdc895a766c4825757c771fdf4c38b23dad'
  config.remember_for = 2.weeks
end
