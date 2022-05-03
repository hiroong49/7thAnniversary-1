import random

from django.core.management import BaseCommand
from django_seed import Seed

from letter.models import Post


class Command(BaseCommand):

    help = "This creates creates posts"

    def add_arguments(self, parser):
        parser.add_argument(
            '--number', default=10, type=int, help="How many posts do you want to create?"
        )

    def handle(self, *args, **options):
        number = options.get('number')
        seeder = Seed.seeder()

        photo_choices = ["ic_rose", "ic_rose_frag", "ic_compass", "ic_bottle_letter", "ic_bottle_heart", "ic_whale",
                         "ic_boongbbang", "ic_duck", "ic_shark", "ic_moonstar", "ic_cake", "ic_purple_heart",
                         "ic_hamzzi", "ic_shootingstar", "ic_earth", "ic_socute"]

        seeder.add_entity(Post, number, {
            "author": lambda x: seeder.faker.name(),
            "photo": lambda x: "images/seeds/"+str(random.randint(1, 5))+".png",
            "body": lambda x: seeder.faker.text(),
            "letter_paper": lambda x: photo_choices[random.randint(0, 16)],
        })

        seeder.execute()

        self.stdout.write(self.style.SUCCESS(f'{number} posts created!'))
