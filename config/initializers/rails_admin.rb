# rubocop:disable BlockLength
RailsAdmin.config do |config|
  config.excluded_models << 'User'

  config.model 'Article' do
    # list article section
    list do
      field :id do
        label 'Article Id'
      end
      field :user_id do
        label 'User Id'
      end
      field :title
      field :publish do
        label 'publised'
      end
      field :description do
        formatted_value do # used in form views
          value.html_safe
        end
        pretty_value do # used in list view columns and show views
          value.html_safe
        end
        export_value do
          value.html_safe # used in exports, where no html/data is allowed
        end
      end
    end
    # show article section
    show do
      field :id do
        label 'Article Id'
      end
      field :user_id do
        label 'User Id'
      end
      field :title
      field :publish do
        label 'publised'
      end
      field :description do
        pretty_value do # used in list view columns and show views
          value.html_safe
        end
      end
      field :content do
        formatted_value do # used in form views
          value.html_safe
        end

        pretty_value do # used in list view columns and show views
          value.html_safe
        end

        export_value do
          value.html_safe # used in exports, where no html/data is allowed
        end
      end
    end
    # edit article section
    edit do
      field :title
      field :description
      field :category
      field :content do
        formatted_value do # used in form views
          value.html_safe
        end

        pretty_value do # used in list view columns and show views
          value.html_safe
        end

        export_value do
          value.html_safe # used in exports, where no html/data is allowed
        end
      end
      field :publish
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
        label 'User Id'
        visible true
      end
      field :article_id do
        label 'Article Id'
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
  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar true
  config.compact_show_view = false
  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
