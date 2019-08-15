using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LanguageLearner
{

    public enum Role
    {
        Teacher,
        Learner,
        Admin,
        None
    }

    public enum ContentType
    {
        Heading,
        SubHeading
    }

    public class BaseLanguageModel
    {

        public BaseLanguageModel(Role role, LeftSideBar leftSideBar = null, RightSideBar rightSideBar = null, UserActivity userActivity = null, TableOfContent tableOfContent = null, Breadcrumb breadcrumb=null)
        {
            Role = role;
            LeftSideBar = leftSideBar;
            RightSideBar = rightSideBar;
            UserActivity = userActivity;
            TableOfContent = tableOfContent;
            Breadcrumb = breadcrumb;
        }

        public Role Role { get; private set; }

        public LeftSideBar LeftSideBar { get; private set; }

        public RightSideBar RightSideBar { get; private set; }

        public UserActivity UserActivity { get; private set; }

        public TableOfContent TableOfContent { get; private set; }

        public Breadcrumb Breadcrumb { get; private set; }
    }

    public class LeftSideBar
    {

        public LeftSideBar(List<object> items)
        {
            Items = items;
        }

        public List<object> Items { get; private set; }

    }

    public class UserDetails
    {

        public UserDetails(string userName = null)
        {
            UserName = userName;
        }
        private string _userName;

        public string UserName
        {
            get { return _userName; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    _userName = "User Name";
                    SignIn_SignOut_SignUp = "Sign in/Sign up";
                }
                else
                {
                    _userName = value;
                    SignIn_SignOut_SignUp = "Sign out";
                }
            }
        }

        public string SignIn_SignOut_SignUp { get; private set; }
    }

    public class RightSideBar
    {

        public RightSideBar(Dictionary<string, Dictionary<string, string>> items)
        {
            Items = items;
        }

        public Dictionary<string, Dictionary<string, string>> Items { get; private set; }

    }

    public class DropdownModel
    {

        public DropdownModel(List<string> id, Dictionary<string, object> items, string currentKey, string className = "left")
        {
            Id = id;
            Items = items;
            CurrentKey = currentKey;
            ClassName = className;
        }

        public Dictionary<string, object> Items { get; private set; }

        public List<string> Id { get; private set; }

        public string ClassName { get; private set; }

        public string CurrentKey { get; private set; }

    }

    public class UserActivity
    {

        public UserActivity(List<string> teachersList, Dictionary<string, Dictionary<string, string>> activity)
        {
            TeachersList = teachersList;
            Activity = activity;
        }

        public Dictionary<string, Dictionary<string, string>> Activity { get; private set; }

        public List<string> TeachersList { get; private set; }

    }

    public class TableOfContent
    {

        public TableOfContent(List<KeyValuePair<string, string>> contentList)
        {
            ContentList = contentList;
        }

        public List<KeyValuePair<string, string>> ContentList { get; private set; }

    }

    public class Breadcrumb
    {
        public Breadcrumb(List<string> items)
        {
            Items = items;
        }

        public List<string> Items { get; private set; }

    }
}
