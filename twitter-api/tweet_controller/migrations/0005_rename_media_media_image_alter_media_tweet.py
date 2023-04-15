# Generated by Django 4.1.7 on 2023-04-08 14:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("tweet_controller", "0004_alter_media_tweet"),
    ]

    operations = [
        migrations.RenameField(
            model_name="media",
            old_name="media",
            new_name="image",
        ),
        migrations.AlterField(
            model_name="media",
            name="tweet",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="tweet_media",
                to="tweet_controller.tweet",
            ),
        ),
    ]