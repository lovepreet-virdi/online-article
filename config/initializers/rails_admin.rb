RailsAdmin.config do |config|

  config.model 'User' do
    edit do
      field :name
      field :email
      field :password
      field :password_confirmation
    end
  end
  config.excluded_models << 'User'
  config.model 'Article' do
    list do
      field :id
      field :user_id
      field :title
      field :description do
        formatted_value do # used in form views
          value.html_safe
        end

        pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
          value.html_safe
        end

        export_value do
          value.html_safe # used in exports, where no html/data is allowed
        end
      end
    end

    show do
      field :id
      field :user_id
      field :title
      field :description do
        formatted_value do # used in form views
          value.html_safe
        end

        pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
          value.html_safe
        end

        export_value do
          value.html_safe # used in exports, where no html/data is allowed
        end
      end
      field :content do
        formatted_value do # used in form views
          value.html_safe
        end

        pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
          value.html_safe
        end

        export_value do
          value.html_safe # used in exports, where no html/data is allowed
        end
      end
    end

    edit do
      field :title
      field :description do
    

        pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
          value.html_safe
        end

        export_value do
          value.html_safe # used in exports, where no html/data is allowed
        end
      end
      field :category
      field :content
      field :user_id, :hidden do
     
        default_value do
          bindings[:view].current_user.id
        end
      end
    end 
  end
  config.model 'Assign' do
    edit do
      field :article
      field :user
    end
    list do
      include_all_fields
      field :user_id do
        visible true
      end
      field :article_id do
        visible true
      end
    
    end
  end


  config.authorize_with do
    redirect_to main_app.root_path if !user_signed_in? || current_user.role != true
  end
  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    # show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
