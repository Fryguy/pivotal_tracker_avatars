const emailLookup = {
};

function emailFromInitials(initials) {
  return emailLookup[initials] || "undefined";
}

function gravatarURL(initials) {
  return "//www.gravatar.com/avatar/" + md5(emailFromInitials(initials).toLowerCase()) + "?r=g&d=identicon";
}

function replaceElementInitials(element) {
  if (!element.innerHTML.startsWith("<img")) {
    element.style.paddingTop = "1px";
    element.innerHTML = "<img src=\"" + gravatarURL(element.innerHTML) + "\" width=\"20px\" height=\"20px\">";
  };
}

function replaceInitials() {
  var elements = document.getElementsByClassName("initials");

  Array.prototype.forEach.call(elements, function(element) {
    replaceElementInitials(element);
  });
}

window.setInterval(replaceInitials, 5000);
