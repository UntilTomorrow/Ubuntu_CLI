#Install Gitlab Ubuntu Server 

# package
$ curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
$ sudo apt-get install gitlab-ce

#konfigurasi 

$ sudo nano /etc/gitlab/gitlab.rb
  -> ubah external_url 'https://example.com' dengan domain atau IP Server 
$ sudo gitlab-ctl reconfigure
$ sudo gitlab-ctl status

#optional reset password root 
$ sudo gitlab-rake "gitlab:password:reset"
$ sudo nano /etc/gitlab/initial_root_password

$ git config --global user.name "name"
$ git config --global user.email "email@example.com"

#tambah git remote di direktori yang akan di push / pull

$ git init
$ git remote -v
$ git pull origin (namabranch)

$ git checkout -b (branch)   --> membuat branch baru 
$ git checkout (branch)     --> pindah branch 

rebase 
$ git pull --rebase origin(branch)

$ touch file 
$ git add .
$ git commit -m "push puh"
$ git push origin -u (branch)

=====================================

#Error 

Ketika pindah branch mendapatkan error: The following untracked working tree files would be overwritten by checkout:
Commit Perubahan :
$ git status
$ git add .
$ git commit -m "commit"





