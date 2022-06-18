import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    //permissions: ["super-admin", "executive", "data-entry-operator"],
    permissions: [
      "super-admin",
      "executive",
      "data-entry-operator",
      "online-class-operator",
      "exam-operator",
    ],
    navLink: "/",
  },

  // {
  //   id: "adminrole",
  //   title: "Admin Roles",
  //   icon: <Icon.Users size={20} />,
  //   permissions: ["super-admin"],
  //   type: "item",
  //   navLink: "/admin-roles",
  // },
  {
    id: "student",
    title: "Student",
    icon: <Icon.User size={20} />,
    permissions: ["super-admin"],
    // permissions: [],
    type: "item",
    navLink: "/student",
  },

  {
    id: "teacher",
    title: "Teacher",
    icon: <Icon.User size={20} />,
    permissions: ["super-admin"],
    // permissions: [""],
    type: "item",
    navLink: "/teacher",
  },

  {
    id: "Zoom Host",
    title: "Zoom Hosts",
    icon: <Icon.User size={20} />,
    permissions: ["super-admin", "online-class-operator"],
    // permissions: [],
    type: "item",
    navLink: "/zoom-users",
  },

  {
    id: "classes",
    title: "Classes",
    icon: <Icon.Tv size={20} />,
    //permissions: ["super-admin"],
    permissions: ["super-admin", "online-class-operator"],
    type: "item",
    navLink: "/classes",
  },
  {
    id: "co-curricular",
    title: "co-curricular",
    icon: <Icon.Film size={20} />,
    permissions: ["super-admin", "online-class-operator"],
    type: "item",
    navLink: "/co-curricular",
  },
  {
    id: "questionlist",
    title: "Questions",
    icon: <Icon.Book size={20} />,
    permissions: ["super-admin"],
    type: "collapse",
    // navLink: "/questions-listing",
    children: [
      {
        id: "approvedQuestions",
        title: "Approved Questions",
        permissions: ["super-admin", "executive"],
        type: "item",
        navLink: "/approved-questions",
      },
    ],
  },
  {
    id: "questionlistOP",
    title: "Executive Questions",
    icon: <Icon.Book size={20} />,
    // permissions: ["super-admin", "executive"],
    permissions: ["executive"],
    type: "collapse",
    children: [
      {
        id: "approvedQuestions",
        title: "Approved Questions",
        permissions: ["super-admin", "executive"],
        type: "item",
        navLink: "/approved-questions",
      },
      {
        id: "uploadedQuestions",
        title: "Uploaded Questions",
        permissions: ["super-admin", "executive"],
        type: "item",
        navLink: "/uploaded-questions",
      },
    ],
  },

  {
    id: "manage",
    title: "Manage",
    icon: <Icon.Users size={20} />,
    permissions: ["super-admin"],
    type: "collapse",
    children: [
      {
        id: "class",
        title: "Class",
        // icon: <Icon.Users size={20} />,
        permissions: ["super-admin", "data-entry-operator"],
        type: "item",
        navLink: "/manage-class",
      },
      {
        id: "board",
        title: "Board",
        // icon: <Icon.Users size={20} />,
        permissions: ["super-admin", "data-entry-operator"],
        type: "item",
        navLink: "/manage-board",
      },
      {
        id: "subject",
        title: "Subject",
        // icon: <Icon.Users size={20} />,
        permissions: ["super-admin", "data-entry-operator"],
        type: "item",
        navLink: "/manage-subject",
      },
    ],
  },
  {
    id: "operator",
    title: "Operator Questions",
    icon: <Icon.BookOpen size={20} />,
    // permissions: ["super-admin", "data-entry-operator"],
    permissions: ["data-entry-operator"],
    type: "item",
    navLink: "/operator-questions",
  },
  {
    id: "examtestslist",
    title: "Exams & Tests",
    icon: <Icon.BookOpen size={20} />,
    permissions: ["super-admin", "exam-operator"],
    // permissions: [""],
    type: "collapse",

    children: [
      {
        id: "Regular Exams",
        title: "Regular Exams",
        permissions: ["super-admin", "exam-operator"],
        type: "item",
        navLink: "/regular-exams",
      },
      {
        id: "Olympiad Exams",
        title: "Olympiad Exams",
        permissions: ["super-admin", "exam-operator"],
        type: "item",
        navLink: "/olympiad-exams",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    icon: <Icon.CreditCard size={20} />,
    permissions: ["super-admin"],
    // permissions: [""],
    type: "collapse",
    children: [
      {
        id: "Course",
        title: "Course",
        permissions: ["super-admin"],
        type: "item",
        navLink: "/course-payments",
      },
      {
        id: "Exam",
        title: "Exam",
        permissions: ["super-admin"],
        type: "item",
        navLink: "/exam-payments",
      },
    ],
  },
  {
    id: "discounts",
    title: "discounts",
    icon: <Icon.Percent size={20} />,
    permissions: ["super-admin"],
    // permissions: [""],
    type: "item",
    navLink: "/discounts",
  },
  {
    id: "Image",
    title: "Image",
    icon: <Icon.Image size={20} />,
    // permissions: ["super-admin", "data-entry-operator", "executive"],
    permissions: ["data-entry-operator", "executive"],
    type: "item",
    navLink: "/manage-images",
  },
  {
    id: "boards",
    title: "Boards",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    //permissions: ["super-admin", "executive", "data-entry-operator"],
    permissions: [
      "super-admin",
      "executive",
      "data-entry-operator",
      "online-class-operator",
      "exam-operator",
    ],
  },

  {
    id: "sub-admin",
    title: "Sub-admin",
    icon: <Icon.Users size={20} />,
    permissions: ["super-admin", "executive"],
    type: "collapse",
    children: [
      {
        id: "Users",
        title: "Users",
        // icon: <Icon.Users size={20} />,
        permissions: ["super-admin", "executive"],
        type: "item",
        navLink: "/admin-roles",
      },
      {
        id: "Admin roles",
        title: "Admin Roles",
        // icon: <Icon.Users size={20} />,
        permissions: ["super-admin"],
        type: "item",
        navLink: "/subuser",
      },
    ],
  },
];

export default navigationConfig;
