# ffa
class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guess user
    if user.role == true
      can :manage, :all
      can :create, :article, user_id: user.id if user
    else
      can :index, :article
      can :create, :article
      can :review_article, :assign
      can :review_article1, Assign do |article|
        article.user_id == user.id
      end
      can :update, Article do |article|
        article.user_id == user.id
      end
      can :destroy, Article do |article|
        article.user_id == user.id
      end

      # comment section
        can :update, Comment do |comment|
        comment.user_id == user.id
      end
      can :destroy, Comment do |comment|
        comment.user_id == user.id
      end
      can :index, :comment
      can :create, :comment
    end
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
  end
end
