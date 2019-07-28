$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "\r\nIn order to perform successful login\r\nAs a user\r\nI want to enter correct username and password",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered the \"\u003cusername\u003e\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "Turkey"
      ],
      "line": 15
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"\u003cloginType\u003e\" successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ],
      "line": 20,
      "id": "login;in-order-to-verify-the-login-to-facebook;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "should"
      ],
      "line": 21,
      "id": "login;in-order-to-verify-the-login-to-facebook;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldnot"
      ],
      "line": 22,
      "id": "login;in-order-to-verify-the-login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 276389,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered the \"valid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered the \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "Turkey"
      ],
      "line": 15
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"should\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 92458509,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 141592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_username(String)"
});
formatter.result({
  "duration": 4120158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_password(String)"
});
formatter.result({
  "duration": 143481,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 1655690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_successfully_logged_in(String)"
});
formatter.result({
  "duration": 90242,
  "status": "passed"
});
formatter.after({
  "duration": 114407,
  "status": "passed"
});
formatter.before({
  "duration": 170667,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered the \"invalid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered the \"invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "Turkey"
      ],
      "line": 15
    },
    {
      "cells": [
        "above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"shouldnot\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 58903,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 41157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_username(String)"
});
formatter.result({
  "duration": 75516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_password(String)"
});
formatter.result({
  "duration": 70230,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 98926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_successfully_logged_in(String)"
});
formatter.result({
  "duration": 161227,
  "status": "passed"
});
formatter.after({
  "duration": 69097,
  "status": "passed"
});
formatter.uri("logintoprod.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Production",
  "description": "\r\nIn order to perform successful login to Prodcuction\r\nAs a user\r\nI want to enter correct username and password",
  "id": "login-to-production",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bvt"
    },
    {
      "line": 1,
      "name": "@prod"
    }
  ]
});
formatter.before({
  "duration": 65322,
  "status": "passed"
});
formatter.before({
  "duration": 33227,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 60413,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 40779,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production;in-order-to-verify-the-login-to-facebook-production",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user entered the \"valid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user entered the \"valid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user validates the captured image",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"shouldbe\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_username(String)"
});
formatter.result({
  "duration": 73628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_password(String)"
});
formatter.result({
  "duration": 58525,
  "status": "passed"
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_captured_image()"
});
formatter.result({
  "duration": 81558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldbe",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_successfully_logged_in(String)"
});
formatter.result({
  "duration": 64189,
  "status": "passed"
});
formatter.after({
  "duration": 39268,
  "status": "passed"
});
formatter.after({
  "duration": 119316,
  "status": "passed"
});
formatter.before({
  "duration": 218997,
  "status": "passed"
});
formatter.before({
  "duration": 33605,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 174442,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 72495,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production;in-order-to-verify-the-login-to-facebook-production",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user entered the \"invalid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user entered the \"invalid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the captured image",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user \"shouldnot\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_username(String)"
});
formatter.result({
  "duration": 72118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 18
    }
  ],
  "location": "LoginStep.user_entered_the_valid_password(String)"
});
formatter.result({
  "duration": 55127,
  "status": "passed"
});
formatter.match({
  "location": "LoginProdStep.user_validates_the_captured_image()"
});
formatter.result({
  "duration": 51728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_successfully_logged_in(String)"
});
formatter.result({
  "duration": 60036,
  "status": "passed"
});
formatter.after({
  "duration": 31339,
  "status": "passed"
});
formatter.after({
  "duration": 55127,
  "status": "passed"
});
});