FROM nginx

#config
copy ./nginx.conf /etc/nginx/nginx.conf

#content, comment out the ones you dont need!
copy ./dist/dev/*.html /usr/share/nginx/html/