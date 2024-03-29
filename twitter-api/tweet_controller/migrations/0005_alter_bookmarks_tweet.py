# Generated by Django 4.1.7 on 2023-05-04 04:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("tweet_controller", "0004_bookmarks"),
    ]

    operations = [
        migrations.AlterField(
            model_name="bookmarks",
            name="tweet",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="bookmark_tweet",
                to="tweet_controller.tweet",
            ),
        ),
    ]
