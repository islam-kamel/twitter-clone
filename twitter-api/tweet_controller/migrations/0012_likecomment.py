# Generated by Django 4.1.7 on 2023-05-03 13:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("tweet_controller", "0011_alter_likereply_replay_commentreplay"),
    ]

    operations = [
        migrations.CreateModel(
            name="LikeComment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("like", models.BooleanField(default=False)),
                (
                    "comment",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="comment_likes",
                        to="tweet_controller.tweet",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_comment_like",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Comment Like",
                "verbose_name_plural": "Comments Likes",
            },
        ),
    ]
