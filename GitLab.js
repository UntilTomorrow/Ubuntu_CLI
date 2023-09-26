#Install Gitlab Ubuntu Server 

# package
$ curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
$ sudo apt-get install gitlab-ce

#konfigurasi 

$ sudo nano /etc/gitlab/gitlab.rb
  -> ubah external_url 'https://example.com' dengan domain atau IP Server 
$ sudo gotlab-ctl status

$ git config --global user.name "name"
$ git config --global user.email "email@example.com"


