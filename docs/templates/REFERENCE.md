# <@-_("reference")@>

## <@-_("index")@>

  1. [`<@-_("src/auth/actors/authenticate.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/authenticate.js"))@>)
  2. [`<@-_("src/auth/actors/authenticate-attempt.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/authenticate-attempt.js"))@>)
  3. [`<@-_("src/auth/actors/change.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/change.js"))@>)
  4. [`<@-_("src/auth/actors/confirm.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/confirm.js"))@>)
  5. [`<@-_("src/auth/actors/login.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/login.js"))@>)
  6. [`<@-_("src/auth/actors/logout.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/logout.js"))@>)
  7. [`<@-_("src/auth/actors/only-authenticated.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/only-authenticated.js"))@>)
  8. [`<@-_("src/auth/actors/only-groups.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/only-groups.js"))@>)
  9. [`<@-_("src/auth/actors/only-permissions.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/only-permissions.js"))@>)
  10. [`<@-_("src/auth/actors/only-users.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/only-users.js"))@>)
  11. [`<@-_("src/auth/actors/only.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/only.js"))@>)
  12. [`<@-_("src/auth/actors/recover.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/recover.js"))@>)
  13. [`<@-_("src/auth/actors/refresh.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/refresh.js"))@>)
  14. [`<@-_("src/auth/actors/register.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/register.js"))@>)
  15. [`<@-_("src/auth/actors/unregister.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/actors/unregister.js"))@>)
  16. [`<@-_("src/auth/connection.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/connection.js"))@>)
  17. [`<@-_("src/auth/controllers/change.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/change.js"))@>)
  18. [`<@-_("src/auth/controllers/confirm.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/confirm.js"))@>)
  19. [`<@-_("src/auth/controllers/login.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/login.js"))@>)
  20. [`<@-_("src/auth/controllers/logout.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/logout.js"))@>)
  21. [`<@-_("src/auth/controllers/recover.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/recover.js"))@>)
  22. [`<@-_("src/auth/controllers/refresh.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/refresh.js"))@>)
  23. [`<@-_("src/auth/controllers/register.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/register.js"))@>)
  24. [`<@-_("src/auth/controllers/unregister.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/controllers/unregister.js"))@>)
  25. [`<@-_("src/auth/middlewares/authenticate.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/middlewares/authenticate.js"))@>)
  26. [`<@-_("src/auth/middlewares/authenticate.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/middlewares/authenticate.js"))@>)
  27. [`<@-_("src/auth/query.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/query.js"))@>)
  28. [`<@-_("src/cms.js")@>`](#<@-cms.utils.toAnchor(_("src/cms.js"))@>)
  29. [`<@-_("src/config/schema.extensions.js")@>`](#<@-cms.utils.toAnchor(_("src/config/schema.extensions.js"))@>)
  30. [`<@-_("src/deploy/create-app.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/create-app.js"))@>)
  31. [`<@-_("src/deploy/create-server.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/create-server.js"))@>)
  32. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  33. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  34. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  35. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  36. [`<@-_("src/deploy/initialize.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/initialize.js"))@>)
  37. [`<@-_("src/deploy/load-api.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/load-api.js"))@>)
  38. [`<@-_("src/deploy/load-env.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/load-env.js"))@>)
  39. [`<@-_("src/deploy/mount-sockets.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/mount-sockets.js"))@>)
  40. [`<@-_("src/deploy/mount-router.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/mount-router.js"))@>)
  41. [`<@-_("src/deploy/regenerate-db.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/regenerate-db.js"))@>)
  42. [`<@-_("src/deploy/regenerate-rest.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/regenerate-rest.js"))@>)
  43. [`<@-_("src/deploy/start-server.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/start-server.js"))@>)
  44. [`<@-_("src/deploy/stop-server.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/stop-server.js"))@>)
  45. [`<@-_("src/email/agents/administrator.js")@>`](#<@-cms.utils.toAnchor(_("src/email/agents/administrator.js"))@>)
  46. [`<@-_("src/email/agents/agent.js")@>`](#<@-cms.utils.toAnchor(_("src/email/agents/agent.js"))@>)
  47. [`<@-_("src/history/connection.js")@>`](#<@-cms.utils.toAnchor(_("src/history/connection.js"))@>)
  48. [`<@-_("src/auth/connection.js")@>`](#<@-cms.utils.toAnchor(_("src/auth/connection.js"))@>)
  49. [`<@-_("src/rest/actors/actor.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/actors/actor.js"))@>)
  50. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  51. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  52. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  53. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  54. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  55. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  56. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  57. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  58. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  59. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  60. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  61. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  62. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  63. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  64. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  65. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  66. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  67. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  68. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  69. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  70. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  71. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  72. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  73. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  74. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  75. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  76. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  77. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  78. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  79. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  80. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  81. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  82. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  83. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  84. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  85. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  86. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  87. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  88. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  89. [`<@-_("src/deploy/generated/templates/table.actor.base.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.base.js"))@>)
  90. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  91. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  92. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  93. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  94. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  95. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  96. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  97. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  98. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  99. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  100. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  101. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  102. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  103. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  104. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  105. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  106. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  107. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  108. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  109. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  110. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  111. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  112. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  113. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  114. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  115. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  116. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  117. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  118. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  119. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  120. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  121. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  122. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  123. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  124. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  125. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  126. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  127. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  128. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  129. [`<@-_("src/deploy/generated/templates/table.actor.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.actor.js"))@>)
  130. [`<@-_("src/rest/connection.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/connection.js"))@>)
  131. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  132. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  133. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  134. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  135. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  136. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  137. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  138. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  139. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  140. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  141. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  142. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  143. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  144. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  145. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  146. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  147. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  148. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  149. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  150. [`<@-_("src/rest/controllers/controller.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/controllers/controller.js"))@>)
  151. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  152. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  153. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  154. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  155. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  156. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  157. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  158. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  159. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  160. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  161. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  162. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  163. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  164. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  165. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  166. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  167. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  168. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  169. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  170. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  171. [`<@-_("src/deploy/generated/templates/table.controller.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.controller.js"))@>)
  172. [`<@-_("src/rest/handlers/delete-many.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/delete-many.js"))@>)
  173. [`<@-_("src/rest/handlers/delete-one.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/delete-one.js"))@>)
  174. [`<@-_("src/rest/handlers/get-many.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/get-many.js"))@>)
  175. [`<@-_("src/rest/handlers/get-one.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/get-one.js"))@>)
  176. [`<@-_("src/rest/handlers/handler.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/handler.js"))@>)
  177. [`<@-_("src/rest/handlers/post-many.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/post-many.js"))@>)
  178. [`<@-_("src/rest/handlers/post-one.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/post-one.js"))@>)
  179. [`<@-_("src/rest/handlers/put-many.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/put-many.js"))@>)
  180. [`<@-_("src/rest/handlers/put-one.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/put-one.js"))@>)
  181. [`<@-_("src/rest/handlers/schema.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/handlers/schema.js"))@>)
  182. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  183. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  184. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  185. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  186. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  187. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  188. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  189. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  190. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  191. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  192. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  193. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  194. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  195. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  196. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  197. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  198. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  199. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  200. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  201. [`<@-_("src/rest/middlewares/enable-post-middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/middlewares/enable-post-middleware.js"))@>)
  202. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  203. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  204. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  205. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  206. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  207. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  208. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  209. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  210. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  211. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  212. [`<@-_("src/rest/middlewares/middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/rest/middlewares/middleware.js"))@>)
  213. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  214. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  215. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  216. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  217. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  218. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  219. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  220. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  221. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  222. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  223. [`<@-_("src/deploy/generated/templates/table.middleware.js")@>`](#<@-cms.utils.toAnchor(_("src/deploy/generated/templates/table.middleware.js"))@>)
  224. [`<@-_("src/router/auth.js")@>`](#<@-cms.utils.toAnchor(_("src/router/auth.js"))@>)
  225. [`<@-_("src/router/history.js")@>`](#<@-cms.utils.toAnchor(_("src/router/history.js"))@>)
  226. [`<@-_("src/router/index.js")@>`](#<@-cms.utils.toAnchor(_("src/router/index.js"))@>)
  227. [`<@-_("src/router/routes.js")@>`](#<@-cms.utils.toAnchor(_("src/router/routes.js"))@>)
  228. [`<@-_("src/store/index.js")@>`](#<@-cms.utils.toAnchor(_("src/store/index.js"))@>)
  229. [`<@-_("src/store/local.js")@>`](#<@-cms.utils.toAnchor(_("src/store/local.js"))@>)
  230. [`<@-_("src/ui/babel.config.js")@>`](#<@-cms.utils.toAnchor(_("src/ui/babel.config.js"))@>)
  231. [`<@-_("src/utils/compare-password.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/compare-password.js"))@>)
  232. [`<@-_("src/utils/debug-error.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/debug-error.js"))@>)
  233. [`<@-_("src/utils/debug.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/debug.js"))@>)
  234. [`<@-_("src/utils/erroneous-json-response.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/erroneous-json-response.js"))@>)
  235. [`<@-_("src/utils/encrypt-password.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/encrypt-password.js"))@>)
  236. [`<@-_("src/utils/format-bearer-token.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/format-bearer-token.js"))@>)
  237. [`<@-_("src/utils/generate-token.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/generate-token.js"))@>)
  238. [`<@-_("src/utils/generate-virtual-schema.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/generate-virtual-schema.js"))@>)
  239. [`<@-_("src/utils/get-schema-foreign-keys.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/get-schema-foreign-keys.js"))@>)
  240. [`<@-_("src/utils/get-joined-tables.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/get-joined-tables.js"))@>)
  241. [`<@-_("src/utils/index.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/index.js"))@>)
  242. [`<@-_("src/utils/initialize-framework.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/initialize-framework.js"))@>)
  243. [`<@-_("src/utils/render-file.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/render-file.js"))@>)
  244. [`<@-_("src/utils/successful-json-response.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/successful-json-response.js"))@>)
  245. [`<@-_("src/utils/to-insert-fields-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-insert-fields-sql.js"))@>)
  246. [`<@-_("src/utils/to-insert-values-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-insert-values-sql.js"))@>)
  247. [`<@-_("src/utils/to-object-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-object-sql.js"))@>)
  248. [`<@-_("src/utils/to-select-fields-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-select-fields-sql.js"))@>)
  249. [`<@-_("src/utils/to-select-join-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-select-join-sql.js"))@>)
  250. [`<@-_("src/utils/to-select-limit-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-select-limit-sql.js"))@>)
  251. [`<@-_("src/utils/to-select-offset-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-select-offset-sql.js"))@>)
  252. [`<@-_("src/utils/to-select-order-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-select-order-sql.js"))@>)
  253. [`<@-_("src/utils/to-select-where-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-select-where-sql.js"))@>)
  254. [`<@-_("src/utils/to-update-values-sql.js")@>`](#<@-cms.utils.toAnchor(_("src/utils/to-update-values-sql.js"))@>)
  255. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  256. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  257. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  258. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  259. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  260. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  261. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  262. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  263. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  264. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  265. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  266. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  267. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  268. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  269. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  270. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  271. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  272. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  273. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  274. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  275. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  276. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  277. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  278. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  279. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)
  280. [`<@-_("src/...")@>`](#<@-cms.utils.toAnchor(_("src/..."))@>)



# Referencia

Cada parte de este documento:

  - pretende explicar acerca de las partes de este software
  - puede estar redactado en castellano o inglés originalmente
  - tiene una sintaxis específica

## Sintaxis de este documento

Este es un ejemplo de elemento documentativo prototipo:

```/**
 * 
 * ----
 * 
 * #### `{ruta/al/fichero.js}`
 * 
 * @location`:    `acceso.a.variable`
 * @name`:        `nombreAmigable`
 * @type`:        `TipoDeDato` - explicación
 * @receives`:    
 * @receives`:    `nombre:Tipo` - explicación
 * @returns`:     
 * @returns`:     `nombre:Tipo` - explicación
 * @throws`:      
 * @throws`:      `Mensaje de error` - explicación
 * @description`: explicación
 * 
 */
```

#### Ejemplos de código


#### Encabezados

  - Título de API:     ## Auth API
  - Título de sub-API: ### Auth:actors API
  - Título de fichero: ### `/src/auth/actors`

#### Atributos documentativos

  - `@location`: acceso programático al valor referido
  - `@name`: identificador amigable del valor referido en la documentación
  - `@type`: tipo de dato. Puede ser primitivo o artificial
  - `@receives`: lista de datos tipados que recibe una función
  - `@returns`: dato (y profundización) que devuelve una función
  - `@throws`: lista de errores que puede lanzar una función o bloque
  - `@description`: descripción amigable de la funcionalidad del valor referido

#### Tipado y documentación típica

  - `variable1:Tipo1`
  - `variable1:Tipo1 <variable2:Tipo2>`
  - `variable1:Tipo1 <variable2:Tipo2, variable3:Tipo3>`
  - `variable1:Tipo1 <variable2:Tipo2 <variable3:Tipo3, variable4:Tipo4> >`
  - `variable1.propiedad1:TipoPropiedad1`
  - `variable1.propiedad1:TipoPropiedad1 <variable2:Tipo2>`





----

### `/src/auth/actors/authenticate.js`



**Location**:  `cms.auth.actors.authenticate`


**Name**:  authenticate


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - user password and name or email


    - `parameters.name:String` - user name


    - `parameters.email:String` - user email


    - `parameters.password:String` - user password


**Returns**: 


 - `Promise<data:Object>` - data of the authentication:


    - `data.user:Object` - data of the user itself


    - `data.groups:Array<Object>` - all the groups of the user


    - `data.permssions:Array<Object>` - all the permissions of the user


    - `data.sessions:Array<Object>` - all the sessions of the user


**Throws**: 


 - `[ERR:8803]`: `session_token` must be a string


 - `[ERR:999]`: `user` must be exist


**Description**:  method that gets the session data and inserts a new session.





----

### `/src/auth/actors/authenticate-attempt.js`



**Location**:  `cms.auth.actors.authenticateAttempt`


**Name**:  authenticate


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - user password and name or email


    - `parameters.name:String` - user name


    - `parameters.email:String` - user email


    - `parameters.password:String` - user password


**Returns**: 


 - `Promise<data:Object>` - data of the authentication:


    - `data.user:Object` - data of the user itself


    - `data.groups:Array<Object>` - all the groups of the user


    - `data.permssions:Array<Object>` - all the permissions of the user


    - `data.sessions:Array<Object>` - all the sessions of the user


**Throws**: 


 - `[ERR:8803]`: `session_token` must be a string


 - `[ERR:999]`: `user` must be exist


**Description**:  It does the same as the `cms.auth.actors.authenticate`, but it silences the error thrown.





----

### `/src/auth/actors/change.js`



**Location**:  `cms.auth.actors.change`


**Name**:  change


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - parameters to change the `password` of a `user`.


    - `parameters.recovery_token:String` - previous `recovery_token` of the `user`.


    - `parameters.password:String` - new `password`.


**Returns**: 


 - `Promise<data:Object>` - the output data


 - `Promise<data.message:String>` - a message confirming the operation. `"Your password was successfully changed."`


**Throws**: 


 - `[ERR:5064]`: `user` not found


 - `[ERR:5094]`: `user` found multiple times.


 - `[ERR:5774]`: no `user` was affected by the change.


**Description**:  method that changes the password of a `user`.





----

### `/src/auth/actors/confirm.js`



**Location**:  `cms.auth.actors.confirm`


**Name**:  confirm


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - parameters to confirm an `unconfirmed_user`.


 - `parameters.confirmation_token:String` - confirmation_token of the `unconfirmed_user`.


**Returns**: 


 - `Promise<data:Object>` - data returned by confirmation


 - `Promise<data.id:Integer>` - `id` of the `user`.


 - `Promise<data.recovery_token:String>` - `recovery_token` produced by the confirmation operation.


**Throws**: 


 - `[ERR:5233]`: `confirmation_token` does not correspond to any `unconfirmed_user`.


**Description**:  method that confirms an `unconfirmed_user` as `user`.





----

### `/src/auth/actors/login.js`



**Location**:  `cms.auth.actors.login`


**Name**:  login


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - parameters to login.


 - `parameters.name:String` - `name` of the `user`.


 - `parameters.email:String` - `email` of the `user`.


 - `parameters.password:String` - `password` of the `user`.


**Returns**: 


 - `Promise<data:Object>` - returned data.


 - `Promise<data.id:Integer>` - `id` of the user.


 - `Promise<data.refresh_token:String>` - `refresh_token` produced for the session.


 - `Promise<data.session_token:String>` - `session_token` produced for the session.


**Throws**: 


 - `[ERR:5583]`: `parameters.password` must be a string.


 - `[ERR:5580]`: `user` does not exist in database.


 - `[ERR:5587]`: `user` exists but multiple times in database (anomaly).


 - `[ERR:5589]`: `user.password` must be a string (anomaly).


 - `[ERR:5588]`: `user.password` must be correct (smelly)`.


 - `[ERR:5581]`: `maxSessionsPerUser` was reached.


**Description**:  method that creates a new session for the user.





----

### `/src/auth/actors/logout.js`



**Location**:  `cms.auth.actors.logout`


**Name**:  logout


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - parameters to logout.


 - `parameters.session_token:String` - `session_token` of the `session` to delete.


**Returns**: 


 - `Promise<data:Object>` - returned data.


 - `Promise<data.message:String>` - message confirming the operation. `"You are logged out now. We will miss you."`


**Throws**: 


 - `[ERR:4816]`: affected to 0 `session`s.


 - `[ERR:9816]`: affected to multiple `session`s.


**Description**:  method that deletes an existing session of the user.





----

### `/src/auth/actors/only-authenticated.js`



**Location**:  `cms.auth.actors.onlyAuthenticated`


**Name**:  onlyAuthenticated


**Type**:  `AsyncFunction`


**Receives**: 


 - `authParam:Object` - authentication of the `user`. Used as method of authentication.


 - `session_token:String` - `session_token` of the `session` of the `user`.Used as method of authentication.


 - `options:Object` - extra options.


 - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.


**Returns**: 


 - `Promise<isValid:Boolean>` - returns `true` if there is at least 1 way of authentication. Otherwise, it returns `false`.


**Throws**:  Nothing.


**Description**:  method that tries to authenticate





----

### `/src/auth/actors/only-groups.js`



**Location**:  `cms.auth.actors.onlyGroups`


**Name**:  onlyGroups


**Type**:  `AsyncFunction`


**Receives**: 


 - `groups:Array<String>` - list of valid `group.name`s.


 - `authParam:Object` - authentication of the `user`. Used as method of authentication.


 - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.


 - `options:Object` - extra options.


 - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.


**Returns**: 


 - `Promise<isValid:Boolean>` - returns `true` if:


    - there are `groups`, and it has at least one.


    - there are no `groups`.





 Otherwise, it returns `false`.


**Throws**: 


 - `[ERR:7718]`: `groups` must be an array.


**Description**:  method that checks that the agent of authentication (`authParam`, `session_token` or `options.request`) belongs to any of the specified `groups`, or if there are no `groups` at all (in both cases, it return `true`, otherwise, `false`).





----

### `/src/auth/actors/only-permissions.js`



**Location**:  `cms.auth.actors.onlyPermissions`


**Name**:  onlyPermissions


**Type**:  `AsyncFunction`


**Receives**: 


 - `permissions:Array<String>` - list of valid `permission.name`s.


 - `authParam:Object` - authentication of the `user`. Used as method of authentication.


 - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.


 - `options:Object` - extra options.


 - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.


**Returns**: 


 - `Promise<isValid:Boolean>` - returns `true` if:


    - there are `permissions`, and it has at least one.


    - there are no `permissions`.





 Otherwise, it returns `false`.


**Throws**: 


 - `[ERR:1342]`: `permissions` must be an array.


**Description**:  method that checks that the agent of authentication (`authParam`, `session_token` or `options.request`) owns any of the specified `permissions`, or if there are no `permissions` at all (in both cases, it return `true`, otherwise, `false`).





----

### `/src/auth/actors/only-users.js`



**Location**:  `cms.auth.actors.onlyUsers`


**Name**:  onlyUsers


**Type**:  `AsyncFunction`


**Receives**: 


 - `users:Array<String>` - list of valid `user.name`s.


 - `authParam:Object` - authentication of the `user`. Used as method of authentication.


 - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.


 - `options:Object` - extra options.


 - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.


**Returns**: 


 - `Promise<isValid:Boolean>` - returns `true` if:


    - there are `users`, and it has at least one.


    - there are no `users`.





 Otherwise, it returns `false`.


**Throws**: 


 - `[ERR:1342]`: `users` must be an array.


**Description**:  method that checks that the agent of authentication (`authParam`, `session_token` or `options.request`) is any of the specified `users`, or if there are no `users` at all (in both cases, it return `true`, otherwise, `false`).





----

### `/src/auth/actors/only.js`



**Location**:  `cms.auth.actors.only`


**Name**:  only


**Type**:  `AsyncFunction`


**Receives**: 


 - `rules:Object` - rules to accomplish.


 - `rules.users:Array<String>` - list of valid `user.name`s.


 - `rules.groups:Array<String>` - list of valid `group.name`s.


 - `rules.permissions:Array<String>` - list of valid `permission.name`s.


 - `authParam:Object` - authentication of the `user`. Used as method of authentication.


 - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.


 - `options:Object` - extra options.


 - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.


**Returns**: 


 - `Promise<isValid:Boolean>` - returns `true` if:


    · when there are `users`, it has at least one, and:


    · when there are `groups`, it has at least one, and:


    · when there are `permissions`, it has at least one.





 Otherwise, it returns `false`.


**Throws**: 


 - `[ERR:4816]`: affected to 0 `session`s.


 - `[ERR:9816]`: affected to multiple `session`s.


**Description**:  method that deletes an existing session of the user.





----

### `/src/auth/actors/recover.js`



**Location**:  `cms.auth.actors.recover`


**Name**:  recover


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - parameters of the action.


 - `parameters.name:String` - 


 - `parameters.email:String` - 


 - `parameters.password:String` - 


**Returns**: 


 - `Promise<output:Object>` - data generated.


    - `output.message:String`: message confirming the operation. `"Email sent to your account's email successfully."`


    - `output.recovery_token`: this is only passed in `development` or `test` environments. Nevermind about this, in `production` it **must** not, and it does not.


**Throws**: 


 - `[ERR:3667]`: `user` must exist.


 - `[ERR:5079]`: `user` must exist only once.


**Description**:  method that deletes an existing session of the user.





----

### `/src/auth/actors/refresh.js`



**Location**:  `cms.auth.actors.refresh`


**Name**:  refresh


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - parameters of the action.


 - `parameters.new_session_token:String` - new `session_token` of the `session`.


 - `parameters.new_refresh_token:String` - new `refresh_token` of the `session`.


 - `parameters.refresh_token:String` - previous `refresh_token` of the `session`.


**Returns**: 


 - `Promise<output:Object>` - data generated.


    - `output.session_token:String`: new `session_token` of the `session`.


    - `output.refresh_token`: new `refresh_token` of the `session`.


**Throws**: 


 - `[ERR:3891]`: `session` must exist.


 - `[ERR:9155]`: `session` must exist only once.


**Description**:  method that deletes an existing session of the user.





----

### `/src/auth/actors/register.js`



**Location**:  `cms.auth.actors.register`


**Name**:  register


**Type**:  `AsyncFunction`


**Receives**: 


 - `parameters:Object` - parameters of the action.


 - `parameters.name:String` - new `name` of the `unconfirmed_user`.


 - `parameters.email:String` - new `email` of the `unconfirmed_user`.


 - `parameters.password:String` - new `password` of the `unconfirmed_user`.


 - `parameters.full_name:String` - new `full_name` of the `unconfirmed_user`.


**Returns**: 


 - `Promise<output:Object>` - data generated.


    - `output.id:Integer`: `id` of the `unconfirmed_user`.


    - `output.confirmation_token:String`: new `confirmation_token` of the `unconfirmed_user`. This is only in `development` and `test` environments, it must not be passed in `production`, and it is not.


**Throws**: 


 - `[ERR:3891]`: `session` must exist.


 - `[ERR:9155]`: `session` must exist only once.


**Description**:  method that deletes an existing session of the user.





----

### `/src/auth/actors/unregister.js`



**Name**:  `unregister`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/change.js`



**Name**:  `change`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/confirm.js`



**Name**:  `confirm`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/login.js`



**Name**:  `login`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/logout.js`



**Name**:  `logout`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/recover.js`



**Name**:  `recover`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/refresh.js`



**Name**:  `refresh`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/register.js`



**Name**:  `register`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/controllers/unregister.js`



**Name**:  `unregister`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/middlewares/authenticate.js`



**Name**:  `authenticate`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/middlewares/authenticate.js`



**Name**:  `authenticate`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/query.js`



**Name**:  `query`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/cms.js`



**Name**:  `cms`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/config/schema.extensions.js`



**Name**:  `schema.extensions`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/create-app.js`



**Name**:  `createApp`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/create-server.js`



**Name**:  `createServer`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/initialize.js`



**Name**:  `initialize`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/load-api.js`



**Name**:  `loadApi`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/load-env.js`



**Name**:  `loadEnv`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/mount-sockets.js`



**Name**:  `mountSockets`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/mount-router.js`



**Name**:  `mountRouter`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/regenerate-db.js`



**Name**:  `regenerateDb`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/regenerate-rest.js`



**Name**:  `regenerateRest`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/start-server.js`



**Name**:  `startServer`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/stop-server.js`



**Name**:  `stopServer`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/email/agents/administrator.js`



**Name**:  `administrator`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/email/agents/agent.js`



**Name**:  `agent`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/history/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/auth/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/actors/actor.js`



**Name**:  `actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.base.js`



**Name**:  `table.actor.base`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.actor.js`



**Name**:  `table.actor`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/connection.js`



**Name**:  `connection`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/controllers/controller.js`



**Name**:  `controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.controller.js`



**Name**:  `table.controller`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/delete-many.js`



**Name**:  `deleteMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/delete-one.js`



**Name**:  `deleteOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/get-many.js`



**Name**:  `getMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/get-one.js`



**Name**:  `getOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/handler.js`



**Name**:  `handler`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/post-many.js`



**Name**:  `postMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/post-one.js`



**Name**:  `postOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/put-many.js`



**Name**:  `putMany`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/put-one.js`



**Name**:  `putOne`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/handlers/schema.js`



**Name**:  `schema`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/middlewares/enable-post-middleware.js`



**Name**:  `enablePostMiddleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/rest/middlewares/middleware.js`



**Name**:  `middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/deploy/generated/templates/table.middleware.js`



**Name**:  `table.middleware`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/auth.js`



**Name**:  `auth`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/history.js`



**Name**:  `history`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/index.js`



**Name**:  `index`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/router/routes.js`



**Name**:  `routes`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/store/index.js`



**Name**:  `index`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/store/local.js`



**Name**:  `local`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/ui/babel.config.js`



**Name**:  `babel.config`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/compare-password.js`



**Name**:  `comparePassword`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/debug-error.js`



**Name**:  `debugError`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/debug.js`



**Name**:  `debug`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/erroneous-json-response.js`



**Name**:  `erroneousJsonResponse`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/encrypt-password.js`



**Name**:  `encryptPassword`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/format-bearer-token.js`



**Name**:  `formatBearerToken`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/generate-token.js`



**Name**:  `generateToken`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/generate-virtual-schema.js`



**Name**:  `generateVirtualSchema`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/get-schema-foreign-keys.js`



**Name**:  `getSchemaForeignKeys`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/get-joined-tables.js`



**Name**:  `getSchemaJoinedTables`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/index.js`



**Name**:  `index`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/initialize-framework.js`



**Name**:  `initializeFramework`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/render-file.js`



**Name**:  `renderFile`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/successful-json-response.js`



**Name**:  `successfulJsonResponse`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-insert-fields-sql.js`



**Name**:  `toInsertFieldsSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-insert-values-sql.js`



**Name**:  `toInsertValuesSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-object-sql.js`



**Name**:  `toObjectSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-fields-sql.js`



**Name**:  `toSelectFieldsSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Parameters**:  


  - `fieldsParam?:Array|String` - campos concretos a seleccionar.


 Cuando es `undefined`, los campos serán automáticamente recogidos del `cms.schema`.


 Es


  - `tablesParam:Array<String>` - tablas concretas a seleccionar.


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-join-sql.js`



**Name**:  `toSelectJoinSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-limit-sql.js`



**Name**:  `toSelectLimitSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-offset-sql.js`



**Name**:  `toSelectOffsetSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-order-sql.js`



**Name**:  `toSelectOrderSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-select-where-sql.js`



**Name**:  `toSelectWhereSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/utils/to-update-values-sql.js`



**Name**:  `toUpdateValuesSql`


**Type**:  


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  




----

### `/src/...`



**Name**:  `unnamed template`


**Type**:  [EJS template]


**Has**:  


**Uses**:  


**Modifies**:  


**Receives**:  


**Returns**:  


**Throws**:  


**Description**:  



