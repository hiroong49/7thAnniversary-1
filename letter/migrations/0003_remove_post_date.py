# Generated by Django 4.0.3 on 2022-04-03 15:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('letter', '0002_post_delete_article'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='date',
        ),
    ]
