#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/hotsauce/")

from hotsauce import app as application
application.secret_key = 'ljkhrei49ufe3jk'
