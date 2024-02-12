"use strict";

var forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
var forumTopicUrl = "https://forum.freecodecamp.org/t/";
var forumCategoryUrl = "https://forum.freecodecamp.org/c/";
var avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
var postsContainer = document.getElementById("posts-container");
var allCategories = {
  299: {
    category: "Career Advice",
    className: "career"
  },
  409: {
    category: "Project Feedback",
    className: "feedback"
  },
  417: {
    category: "freeCodeCamp Support",
    className: "support"
  },
  421: {
    category: "JavaScript",
    className: "javascript"
  },
  423: {
    category: "HTML - CSS",
    className: "html-css"
  },
  424: {
    category: "Python",
    className: "python"
  },
  432: {
    category: "You Can Do This!",
    className: "motivation"
  },
  560: {
    category: "Backend Development",
    className: "backend"
  }
};

var forumCategory = function forumCategory(id) {
  var selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    var _allCategories$id = allCategories[id],
        className = _allCategories$id.className,
        category = _allCategories$id.category;
    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = "general";
    selectedCategory.category = "General";
    selectedCategory.id = 1;
  }

  var url = "".concat(forumCategoryUrl).concat(selectedCategory.className, "/").concat(id);
  var linkText = selectedCategory.category;
  var linkClass = "category ".concat(selectedCategory.className);
  return "<a href=\"".concat(url, "\" class=\"").concat(linkClass, "\" target=\"_blank\">\n    ").concat(linkText, "\n  </a>");
};

var timeAgo = function timeAgo(time) {
  var currentTime = new Date();
  var lastPost = new Date(time);
  var timeDifference = currentTime - lastPost;
  var msPerMinute = 1000 * 60;
  var minutesAgo = Math.floor(timeDifference / msPerMinute);
  var hoursAgo = Math.floor(minutesAgo / 60);
  var daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return "".concat(minutesAgo, "m ago");
  }

  if (hoursAgo < 24) {
    return "".concat(hoursAgo, "h ago");
  }

  return "".concat(daysAgo, "d ago");
};

var viewCount = function viewCount(views) {
  var thousands = Math.floor(views / 1000);

  if (views >= 1000) {
    return "".concat(thousands, "k");
  }

  return views;
};

var avatars = function avatars(posters, users) {
  return posters.map(function (poster) {
    var user = users.find(function (user) {
      return user.id === poster.user_id;
    });

    if (user) {
      var avatar = user.avatar_template.replace(/{size}/, 30);
      var userAvatarUrl = avatar.startsWith("/user_avatar/") ? avatarUrl.concat(avatar) : avatar;
      return "<img src=\"".concat(userAvatarUrl, "\" alt=\"").concat(user.name, "\" />");
    }
  }).join("");
};

var fetchData = function fetchData() {
  var res, data;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(forumLatest));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          showLatestPosts(data);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

fetchData();

var showLatestPosts = function showLatestPosts(data) {
  var topic_list = data.topic_list,
      users = data.users;
  var topics = topic_list.topics;
  postsContainer.innerHTML = topics.map(function (item) {
    var id = item.id,
        title = item.title,
        views = item.views,
        posts_count = item.posts_count,
        slug = item.slug,
        posters = item.posters,
        category_id = item.category_id,
        bumped_at = item.bumped_at;
    return "\n    <tr>\n      <td>\n        <a class=\"post-title\" target=\"_blank\" href=\"".concat(forumTopicUrl).concat(slug, "/").concat(id, "\">").concat(title, "</a>\n\n        ").concat(forumCategory(category_id), "\n      </td>\n      <td>\n        <div class=\"avatar-container\">\n          ").concat(avatars(posters, users), "\n        </div>\n      </td>\n      <td>").concat(posts_count - 1, "</td>\n      <td>").concat(viewCount(views), "</td>\n      <td>").concat(timeAgo(bumped_at), "</td>\n    </tr>");
  }).join("");
};