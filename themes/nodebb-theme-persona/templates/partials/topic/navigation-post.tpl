<div class="clearfix">
    <div class="icon pull-left">
        <!-- IF post.isAnon -->
            <a href="<!-- IF post.user.userslug -->{config.relative_path}/user/{post.user.userslug}<!-- ELSE -->#<!-- ENDIF post.user.userslug -->">
                {buildAvatar_post(post.user, "sm", true, "", "user/picture", true)} Anonymous
        <!-- ELSE -->
            <a href="<!-- IF post.user.userslug -->{config.relative_path}/user/{post.user.userslug}<!-- ELSE -->#<!-- ENDIF post.user.userslug -->">
                {buildAvatar(post.user, "sm", true, "", "user/picture")} {post.user.username}
        <!-- ENDIF post.isAnon -->
        </a>
    </div>
    <small class="pull-right">
        <span class="timeago" title="{post.timestampISO}"></span>
    </small>
</div>

<div>{post.content}</div>