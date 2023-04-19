# Generated by Django 4.1.7 on 2023-04-19 06:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("tweet_controller", "0010_likereply"),
    ]

    operations = [
        migrations.AlterField(
            model_name="likereply",
            name="replay",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="replay_likes",
                to="tweet_controller.reply",
            ),
        ),
        migrations.CreateModel(
            name="CommentReplay",
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
                ("content", models.TextField()),
                ("create_at", models.DateTimeField(auto_now_add=True)),
                (
                    "replay",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="replies_comments",
                        to="tweet_controller.reply",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_comments_replies",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Comment Replay",
                "verbose_name_plural": "Comments Replies",
                "ordering": ["-create_at"],
            },
        ),
    ]
