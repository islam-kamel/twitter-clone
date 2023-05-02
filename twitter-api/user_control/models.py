import re

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.db.models import Q
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, fullname, password):
        if not email:
            raise ValueError(_("The Email must be set."))

        pattern = re.compile(
            r"^[a-zA](?=[a-zA-Z0-9._-]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"
        )
        if not re.fullmatch(pattern, username):
            raise ValueError(_("Enter Valid Username"))

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            fullname=fullname
        )
        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_superuser(self, **kwargs):
        user = self.create_user(**kwargs)
        user.is_admin = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser):
    """
    user_id       serial primary key unique not null,
    username      varchar(99) unique       not null,
    full_name     varchar(249)              not null,
    email         varchar(249)              not null,
    date_of_birth date,
    create_at     timestamp default now(),
    is_active     boolean   default true,
    is_staff      boolean   default false,
    is_admin      boolean   default false
    """
    email = models.EmailField(
        verbose_name="Email",
        max_length=255,
        unique=True,
        null=False,
        blank=False
    )

    username = models.CharField(
        verbose_name="Username",
        max_length=50,
        unique=True,
        null=False,
        blank=False
    )

    fullname = models.CharField(
        max_length=100,
        verbose_name="Name",
        null=False,
        blank=False,
    )

    birthdate = models.DateField(verbose_name="Date of birth", null=True, blank=True)

    create_at = models.DateTimeField(
        editable=False,
        auto_now_add=timezone.now
    )

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_verify = models.BooleanField(default=False)
    objects = CustomUserManager()
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "fullname"]


    def __str__(self):
        return self.username


    def has_perm(self, perm, obj=None):
        """Does the user have a specific permission?"""
        # Simplest possible answer: Yes, always
        return True


    def has_module_perms(self, app_label):
        """Does the user have permissions to view the app `app_label`?"""
        # Simplest possible answer: Yes, always
        return True


    @property
    def is_staff(self):
        """Is the user a member of staff?"""
        return self.is_admin


class Profile(models.Model):
    """
    user_profile_id serial primary key unique   not null,
    user_fk         int references twitter_user UNIQUE not null,
    address         varchar,
    bio             text,
    image           text
    """
    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='profile',
        null=False,
        blank=False
    )
    location = models.CharField(
        max_length=250,
        verbose_name='Location',
        blank=True
    )
    website = models.URLField(
        max_length=600,
        verbose_name='Website',
        blank=True
    )
    bio = models.TextField(
        max_length=1000,
        verbose_name='Bio',
        blank=True
    )
    image = models.ImageField(
        verbose_name='Image',
        blank=True,
        upload_to='user_profile/',
        default='default_profile_image.png'
    )
    cover_image = models.ImageField(
        verbose_name='Cover Image',
        blank=True,
        upload_to='profile_cover/'
    )


    def __str__(self):
        return f'{self.user.username} Profile'


class Follow(models.Model):
    user_id = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="following",
    )

    following = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="followers",
    )


    def __str__(self):
        return f'{self.user_id} Following {self.following}'
