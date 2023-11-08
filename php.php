#Command php on ubuntu

$ sudo add-apt-repository ppa:ondrej/php
$ sudo apt install php(version)
$ sudo apt install php7.4-(ektensi)
$ sudo a2enmod php(version)
$ sudo update-alternatives --set php /usr/bin/php7.4
$ Sudo systemctl restart php


# Windows change PHP 
set PATH=C:\Program Files\Ampps\php74;%PATH%

sudo apt-get install php7.1-curl
sudo nano /etc/php/7.1/apache2/php.ini
extension=curl.so
php -m | grep curl

