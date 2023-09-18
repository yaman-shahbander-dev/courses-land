import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import MainPage from './UserSide/MainPageComponents/MainPage';
import SingleCoursePage from './UserSide/SingleCourseComponents/SingleCoursePage';
import SingleJobOfferPage from './UserSide/SingleJobOfferComponents/SingleJobOfferPage';
import AllJobOffersPage from './UserSide/AllJobOffersComponents/AllJobOffersPage';
import ArticlesPage from './UserSide/ArticlesComponents/ArticlesPage';
import Courses from './UserSide/AllCourses/CoursesPage';
import PreloadScreen from './PreloadScreen/PreloadScreen';
import Register from './V-Form/Register';
import Login from './V-Form/Login';
import ContactUs from './UserSide/ContactUs/ContactUs';
import SingleArticle from './UserSide/SingleArticleComponents/SingleArticlePage';
import MediaComponent from './MediaComponent/MediaComponent';
import FirstPageComponent from './Dashboard/FirstPageComponent/FirstPageComponent';
import UsersPage from './Dashboard/UsersComponent/UsersPageComponent';
import EditUser from './Dashboard/UsersComponent/EditUser';
import SearchedTable from './Dashboard/UsersComponent/SearchedTable';
import SearchedTableCourse from './Dashboard/CoursesComponent/SearchedTable';
import CoursesPageComponent from './Dashboard/CoursesComponent/CoursesPageComponent';
import EditCourse from './Dashboard/CoursesComponent/EditCourse';
import CreateCourse from './Dashboard/CoursesComponent/CreateCourseComponents/CreateCourse';
import CategoriesPageComponent from './Dashboard/CategoriesComponent/CategoriesPageComponent';
import EditCategory from './Dashboard/CategoriesComponent/EditCategory';
import SearchedTableCategory from './Dashboard/CategoriesComponent/SearchedTable';
import CreateCategory from './Dashboard/CategoriesComponent/CreateCategoryComponents/CreateCategory';
import TagsComponent from './Dashboard/TagsComponent/TagsPageComponent';
import EditTag from './Dashboard/TagsComponent/EditTag';
import SearchedTableTags from './Dashboard/TagsComponent/SearchedTable';
import CreateTag from './Dashboard/TagsComponent/CreateTagComponents/CreateTag';
import ReportsPageComponent from './Dashboard/ReportsComponent/ReportsPageComponent';
import SearchedTableReports from './Dashboard/ReportsComponent/SearchedTable';
import VideosPageComponent from './Dashboard/VideosComponent/VideosPageComponent';
import EditVideo from './Dashboard/VideosComponent/EditVideo';
import SearchedTableVideo from './Dashboard/VideosComponent/SearchedTable';
import UploadVideo from './Dashboard/VideosComponent/UploadVideoComponents/UploadVideo';
import AuthorsRequestsComponent from './Dashboard/AuthorsRequestsComponent/AuthorsRequestsComponent';
import NotificationsPage from './Dashboard/NotificationsComponent/NotificationsPageComponent';
import SearchedTableNotification from './Dashboard/NotificationsComponent/SearchedTable';
import CreateNotification from './Dashboard/NotificationsComponent/CreateNotificationsComponents/CreateNotification';
import JobsOffersPageComponent from './Dashboard/JobsOffersComponent/JobsOffersPageComponent';
import EditOffer from './Dashboard/JobsOffersComponent/EditOffer';
import SearchedTableOffer from './Dashboard/JobsOffersComponent/SearchedTable';
import CreateJobOffer from './Dashboard/JobsOffersComponent/CreateJobsOfferComponents/CreateJobOffer';
import ArticlesPageComponent from './Dashboard/ArticlesComponent/ArticlesPageComponent';
import EditArticle from './Dashboard/ArticlesComponent/EditArticle';
import SearchedTableArticle from './Dashboard/ArticlesComponent/SearchedTable';
import CreateArticle from './Dashboard/ArticlesComponent/CreateArticleComponents/CreateArticle';
import ProfilePageComponent from './Dashboard/ProfileComponent/ProfilePageComponent';
import SearchPageComponent from './UserSide/SearchComponents/SearchComponents';
import CategoryCoursesPageComponent from './UserSide/CategoryCoursesComponents/CategoryCoursesPageComponent';
import HistoryCourse from './Dashboard/HistoriesComponent/Course/HistoryCourse';
import HistoryVideo from './Dashboard/HistoriesComponent/Video/HistoryVideo';
import HistoryArticle from './Dashboard/HistoriesComponent/Article/HistoryArticle';
import HistoryJob from './Dashboard/HistoriesComponent/Job/HistoryJob';
import FavoriteCourses from './Dashboard/FavoritesComponent/FavoriteCourses/FavoriteCourses';
import SearchedTableFavoriteCourses from './Dashboard/FavoritesComponent/FavoriteCourses/SearchedTableFavoriteCourses';
import FavoriteVideos from './Dashboard/FavoritesComponent/FavoriteVideos/FavoriteVideos';
import SearchedTableFavoriteVideos from './Dashboard/FavoritesComponent/FavoriteVideos/SearchedTableFavoriteVideos';
import ChatBot from './AIChatBot/AiChatBot';
import CommentVideos from './Dashboard/CommentsComponent/CommentVideos/CommentVideos';
import SearchedTableCommentVideos from './Dashboard/CommentsComponent/CommentVideos/SearchedTableCommentVideos';
import CommentArticles from './Dashboard/CommentsComponent/CommentArticle/CommentArticles';
import SearchedTableCommentArticles from './Dashboard/CommentsComponent/CommentArticle/SearchedTableCommentArticles';
import AgentsRequestsComponent from './Dashboard/AgentRequestsComponent/AgentsRequestsComponent';
import Builder from './Dashboard/ArticlesComponent/Builder/Builder';
import firebase from 'firebase/app';
import '@firebase/messaging';

let previousUrl = '';
const observer = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
      previousUrl = location.href;
      if (window?.location.pathname === '/panelControl' || window?.location.pathname === '/historyArticle'
            || window?.location.pathname === '/users' || window?.location.pathname === '/courses'
            || window?.location.pathname === '/editCourse' || window?.location.pathname === '/createCourse'
            || window?.location.pathname === '/videos' || window?.location.pathname === '/editVideo'
            || window?.location.pathname === '/uploadVideo' || window?.location.pathname === '/categories'
            || window?.location.pathname === '/editCategory' || window?.location.pathname === '/createCategory'
            || window?.location.pathname === '/reports' || window?.location.pathname === '/searchReport'
            || window?.location.pathname === '/notifications' || window?.location.pathname === '/searchNotification'
            || window?.location.pathname === '/createNotification' || window?.location.pathname === '/jobsOffers'
            || window?.location.pathname === '/searchJobOffer' || window?.location.pathname === '/editJobOffer'
            || window?.location.pathname === '/articles' || window?.location.pathname === '/searchArticle'
            || window?.location.pathname === '/createArticle' || window?.location.pathname === '/editArticle'
            || window?.location.pathname === '/requests' || window?.location.pathname === '/Agentsrequests'
            || window?.location.pathname === '/historyCourse' || window?.location.pathname === '/historyVideo'
            || window?.location.pathname === '/historyArticle' || window?.location.pathname === '/historyJob'
            || window?.location.pathname === '/favoriteCourse' || window?.location.pathname === '/favoriteVideo'
            || window?.location.pathname === '/commentVideos' || window?.location.pathname === '/commentArticles'
            || window?.location.pathname === '/profile') {
                require('./Dashboard/style.css')
            } else if (window?.location.pathname === '/' || window?.location.pathname === '/AllOffers'
            || window?.location.pathname === '/allCourses' || window?.location.pathname === '/allArticles'
            || window?.location.pathname === '/courseDetails' || window?.location.pathname === '/searchPage'
            || window?.location.pathname === '/OfferDetails' || window?.location.pathname === '/article'
            || window?.location.pathname === '/categoryCourses' || window?.location.pathname === '/playVideo') {
                require('./UserSide/style.css')
                require('./UserSide/themify-icons.css')
                require('./UserSide/default.css')
            }
    }
});

const config = {subtree: true, childList: true};
observer.observe(document, config);

const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null;

function Container() {
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyAc_fj304ivoTqc_53KoyFXIIG4hlFlQD0",
            authDomain: "coursesland-push-notifications.firebaseapp.com",
            projectId: "coursesland-push-notifications",
            storageBucket: "coursesland-push-notifications.appspot.com",
            messagingSenderId: "104528221798",
            appId: "1:104528221798:web:213202926eccf511d43fa7",
            measurementId: "G-9DYDGNLS27"
        };

        firebase.initializeApp(firebaseConfig);

        const messaging = firebase.messaging();

        messaging.getToken().then((FCMtoken) => {
            localStorage.setItem('token', FCMtoken);
        });

        messaging.onMessage(function (payload) {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.body,
                icon: payload.notification.icon,
            };
            new Notification(title, options);
        });

        axios.get('http://127.0.0.1:8000/api/increaseActiveUsers').then();
    }, []);

    // console.log(user !== null ? 'it\'s not null' : 'it\'s null')


    return (
        <div>
            {/* {
                window.addEventListener("beforeunload", (ev) =>
                {
                    ev.preventDefault();
                    return ev.returnValue = 'Are you sure you want to close?';
                })
            }

            {
                window.addEventListener("unload", () =>
                {
                    axios.get('http://127.0.0.1:8000/api/decreaseActiveUsers').then();
                })
            } */}
            <PreloadScreen duration="500" />

            <Switch> {/* Switch is used instead of the word exact for the URL */}

                {/* Show all users in dahsboard */}
                <Route path="/buildArticle">
                    <Builder />
                </Route>

                <Route path="/Agentsrequests">
                    <AgentsRequestsComponent />
                </Route>

                <Route path="/AiChat">
                    <ChatBot />
                </Route>

                <Route path="/AiChat">
                    <ChatBot />
                </Route>

                <Route path="/searchCommentArticle">
                    <SearchedTableCommentArticles />
                </Route>

                <Route path="/commentArticles">
                    <CommentArticles />
                </Route>

                <Route path="/searchCommentVideo">
                    <SearchedTableCommentVideos />
                </Route>

                <Route path="/commentVideos">
                    <CommentVideos />
                </Route>

                <Route path="/searchFavoriteVideo">
                    <SearchedTableFavoriteVideos />
                </Route>

                <Route path="/favoriteVideo">
                    <FavoriteVideos />
                </Route>

                <Route path="/searchFavoriteCourse">
                    <SearchedTableFavoriteCourses />
                </Route>

                <Route path="/favoriteCourse">
                    <FavoriteCourses />
                </Route>

                <Route path="/historyJob">
                    <HistoryJob />
                </Route>

                <Route path="/historyArticle">
                    <HistoryArticle />
                </Route>

                <Route path="/historyVideo">
                    <HistoryVideo />
                </Route>

                <Route path="/historyCourse">
                    <HistoryCourse />
                </Route>

                <Route path="/categoryCourses">
                    <CategoryCoursesPageComponent />
                </Route>

                <Route path="/searchPage">
                    <SearchPageComponent />
                </Route>

                <Route path="/profile">
                    <ProfilePageComponent />
                </Route>

                <Route path="/createArticle">
                    <CreateArticle />
                </Route>

                <Route path="/searchArticle">
                    <SearchedTableArticle />
                </Route>

                <Route path="/editArticle">
                    <EditArticle />
                </Route>

                <Route path="/articles">
                    <ArticlesPageComponent />
                </Route>

                <Route path="/createOffer">
                    <CreateJobOffer />
                </Route>

                <Route path="/searchJobOffer">
                    <SearchedTableOffer />
                </Route>

                <Route path="/editJobOffer">
                    <EditOffer />
                </Route>

                <Route path="/jobsOffers">
                    <JobsOffersPageComponent />
                </Route>

                <Route path="/createNotification">
                    <CreateNotification />
                </Route>

                <Route path="/searchNotification">
                    <SearchedTableNotification />
                </Route>

                <Route path="/notifications">
                    <NotificationsPage />
                </Route>

                <Route path="/requests">
                    <AuthorsRequestsComponent />
                </Route>

                <Route path="/uploadVideo">
                    <UploadVideo />
                </Route>

                <Route path="/searchVideo">
                    <SearchedTableVideo />
                </Route>

                <Route path="/editVideo">
                    <EditVideo />
                </Route>

                <Route path="/videos">
                    <VideosPageComponent />
                </Route>

                <Route path="/searchReport">
                    <SearchedTableReports />
                </Route>

                <Route path="/reports">
                    <ReportsPageComponent />
                </Route>

                <Route path="/createTag">
                    <CreateTag />
                </Route>

                <Route path="/searchTag">
                    <SearchedTableTags />
                </Route>

                <Route path="/editTag">
                    <EditTag />
                </Route>

                <Route path="/tags">
                    <TagsComponent />
                </Route>

                <Route path="/createCategory">
                    <CreateCategory />
                </Route>

                <Route path="/searchCategory">
                    <SearchedTableCategory />
                </Route>

                <Route path="/editCategory">
                    <EditCategory />
                </Route>

                <Route path="/categories">
                    <CategoriesPageComponent />
                </Route>

                <Route path="/createCourse">
                    <CreateCourse />
                </Route>

                <Route path="/searchCourse">
                    <SearchedTableCourse />
                </Route>

                <Route path="/editCourse">
                    <EditCourse />
                </Route>

                <Route path="/courses">
                    <CoursesPageComponent />
                </Route>

                <Route path="/searchUser">
                    <SearchedTable />
                </Route>

                <Route path="/editUser">
                    <EditUser />
                </Route>

                <Route path="/users">
                    <UsersPage />
                </Route>

                <Route path="/panelControl"> {/* Checking if the user has signed in */}
                    {
                        localStorage.getItem('user-info') ?
                            <FirstPageComponent />
                            : <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                    }
                </Route>

                <Route path="/playVideo">
                    <MediaComponent />
                </Route>

                <Route path="/article">{/* The id of the article should be added for dynamic use */}
                    <SingleArticle />
                </Route>

                <Route path="/contactUs">
                    <ContactUs />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

                <Route path="/allCourses">
                    <Courses />
                </Route>

                <Route path='/allArticles'>
                    <ArticlesPage />
                </Route>

                <Route path='/AllOffers'>
                    <AllJobOffersPage />
                </Route>

                <Route path='/OfferDetails'>
                    <SingleJobOfferPage />
                </Route>

                <Route path='/courseDetails'>
                    {/* Loading clicked(selected) course details */}
                    <SingleCoursePage />
                </Route>

                <Route path='/'> {/* Loading a specific component when it matches the URL */}
                    <MainPage />
                </Route>

                <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
        </div>
    );
}

export default withRouter(Container);
