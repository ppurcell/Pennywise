require 'test_helper'

class JournalArticlesControllerTest < ActionController::TestCase
  setup do
    @journal_article = journal_articles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:journal_articles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create journal_article" do
    assert_difference('JournalArticle.count') do
      post :create, journal_article: { date: @journal_article.date, description: @journal_article.description, location: @journal_article.location, picture1: @journal_article.picture1, picture2: @journal_article.picture2, picture3: @journal_article.picture3, picture4: @journal_article.picture4 }
    end

    assert_redirected_to journal_article_path(assigns(:journal_article))
  end

  test "should show journal_article" do
    get :show, id: @journal_article
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @journal_article
    assert_response :success
  end

  test "should update journal_article" do
    patch :update, id: @journal_article, journal_article: { date: @journal_article.date, description: @journal_article.description, location: @journal_article.location, picture1: @journal_article.picture1, picture2: @journal_article.picture2, picture3: @journal_article.picture3, picture4: @journal_article.picture4 }
    assert_redirected_to journal_article_path(assigns(:journal_article))
  end

  test "should destroy journal_article" do
    assert_difference('JournalArticle.count', -1) do
      delete :destroy, id: @journal_article
    end

    assert_redirected_to journal_articles_path
  end
end
