using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LanguageLearner.Controllers
{
    public class HomeController : Controller
    {
        private LeftSideBar leftSideBar = new LeftSideBar(new List<object>()
        {
                 new KeyValuePair<string, object>("Teacher",new Dictionary<string,object>()
                         {
                             {
                                 "English to Telugu",
                                 new Dictionary<string, object>()
                                 {
                                     {
                                         "Beginner",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Intermediate",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Expert",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     }
                                 }
                             },
                             {
                                 "English to Tamil",
                                 new Dictionary<string, object>()
                                 {
                                     {
                                         "Beginner",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Intermediate",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Expert",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     }
                                 }
                             }
                         }),
                 new KeyValuePair<string, object>("Learner",new Dictionary<string,object>()
                         {
                             {
                                 "English to Telugu",
                                 new Dictionary<string, object>()
                                 {
                                     {
                                         "Beginner",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Intermediate",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Expert",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     }
                                 }
                             },
                             {
                                 "English to Tamil",
                                 new Dictionary<string, object>()
                                 {
                                     {
                                         "Beginner",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Intermediate",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     },
                                     {
                                         "Expert",
                                         new Dictionary<string, object>()
                                         {
                                             {
                                                 "Lesson 1",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 2",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 3",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 4",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             },
                                             {
                                                 "Lesson 5",
                                                 new List<string>()
                                                 {
                                                     "Content 1",
                                                     "Content 2",
                                                     "Content 3",
                                                     "Content 4"
                                                 }
                                             }
                                         }
                                     }
                                 }
                             }
                         }),
            "About",
            "Help",
            "Contact"
        });
        private RightSideBar rightSideBar=new RightSideBar(new Dictionary<string, Dictionary<string,string>>()
        {
            {
                "Property 1",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 2",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 3",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 4",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 5",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 6",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 7",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 8",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 9",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 10",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 11",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 12",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 13",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 14",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 15",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            },
            {
                "Property 16",
                new Dictionary<string,string>()
                {
                    {
                        "Word",
                        "Textbox"
                    },
                    {
                        "Definition",
                        "Textarea"
                    }
                }
            }
        });
        private UserActivity userActivity=new UserActivity(new List<string>()
        {
            "Teacher 1",
            "Teacher 2",
            "Teacher 3"
        }, 
        new Dictionary<string, Dictionary<string, string>>()
        {
            {
                "All",
                new Dictionary<string,string>()
                {
                    {
                        "All",
                        ""
                    },
                    {
                        "Another",
                        "The WAI ARIA standard defines an actual widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.\r\nBootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.\r\nHowever, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the ESC key."
                    }
                }
            },
            {
                "Learner",
                new Dictionary<string,string>()
                {
                    {
                        "Learn",
                        "The WAI ARIA standard defines an actual widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.\r\nBootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.\r\nHowever, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the ESC key."
                    }
                }
            },
            {
                "Teacher",
                new Dictionary<string,string>()
                {
                    {
                        "Teach",
                        "The WAI ARIA standard defines an actual widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.\r\nBootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.\r\nHowever, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the ESC key."
                    }
                }
            },
            {
                "News",
                new Dictionary<string,string>()
                {
                    {
                        "News",
                        "The WAI ARIA standard defines an actual widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.\r\nBootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.\r\nHowever, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the ESC key."
                    }
                }
            },
            {
                "Questions",
                new Dictionary<string,string>()
                {
                    {
                        "Questions",
                        "The WAI ARIA standard defines an actual widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.\r\nBootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.\r\nHowever, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the ESC key."
                    }
                }
            },
            //{
            //    "Following",
            //    new Dictionary<string,string>()
            //    {
            //        {
            //            "Following",
            //            "The WAI ARIA standard defines an actual widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.\r\nBootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.\r\nHowever, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the ESC key."
            //        }
            //    }
            //},
            //{
            //    "Follower",
            //   new Dictionary<string,string>()
            //    {
            //        {
            //            "Follower",
            //            "The WAI ARIA standard defines an actual widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.\r\nBootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the role and aria- attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.\r\nHowever, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual .dropdown-item elements using the cursor keys and close the menu with the ESC key."
            //        }
            //    }
            //}
        });
        private TableOfContent tableOfContent=new TableOfContent(new List<KeyValuePair<string, string>>()
        {
            new KeyValuePair<string, string>(ContentType.Heading.ToString(), "Yes"),
            new KeyValuePair<string, string>(ContentType.SubHeading.ToString(), "Yes"),
            new KeyValuePair<string, string>(ContentType.SubHeading.ToString(), "Yes"),
            new KeyValuePair<string, string>(ContentType.SubHeading.ToString(), "Yes"),
            new KeyValuePair<string, string>(ContentType.Heading.ToString(), "Yes"),
            new KeyValuePair<string, string>(ContentType.Heading.ToString(), "Yes"),
            new KeyValuePair<string, string>(ContentType.Heading.ToString(), "Yes")
        });
        private Breadcrumb breadcrumb=new Breadcrumb(new List<string>()
        {
            "Teacher", "English_to_Telugu", "Beginner", "Lesson_1", "Content_1"
        });
        private UserDetails userDetails = new UserDetails("Ok");

        public ActionResult Index()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, null, rightSideBar, userActivity, tableOfContent, breadcrumb);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(new KeyValuePair<string,UserDetails>(baseLangModel,userDetails));
        }

        public ActionResult AboutLanguage()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult Beginner()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult Intermediate()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult Expert()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult Scripts()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult Feeds()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult Game()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult Dictionary()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult SampleTeacher()
        {
            BaseLanguageModel baseLanguageModel = new BaseLanguageModel(Role.None, leftSideBar, rightSideBar);
            string baseLangModel = JsonConvert.SerializeObject(baseLanguageModel, Formatting.None);
            return View(model: baseLangModel);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}