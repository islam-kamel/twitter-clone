from .settings import *

SECRET_KEY = "KWHn-gCMLUFKH_5sNhHlW9Tkwhovpz4FUfhTA62bzDQ"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': "twitter_clone_dev",
        'HOST': "localhost",
        'PROT': "5432",
        'USER': "postgres",
        'PASSWORD': "toor"
    }
}
CORS_ALLOWED_ORIGINS = ['http://localhost:3000', 'http://localhost:3008']
