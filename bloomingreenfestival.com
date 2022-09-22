server {
        root /home/user/bloom-in-green;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name bloomingreenfestival.com;

        location ~ "^/img/(?<path>.*)/(?<width>\d+)/(?<image>.+)$" {
                 alias /home/user/bloom-in-green/img/$path/$image;
                 image_filter resize $width -;
                 image_filter_buffer 8M;
                 image_filter_webp_quality 100;
        }

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ $uri.html  =404;
        }

         listen [::]:443 ssl http2 ipv6only=on;
         listen 443 ssl http2; # managed by Certbot
         ssl_certificate /etc/letsencrypt/live/bloomingreenfestival.com/fullchain.pem; # managed by Certbot
         ssl_certificate_key /etc/letsencrypt/live/bloomingreenfestival.com/privkey.pem; # managed by Certbot
         include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
         ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    listen 80;
    listen [::]:80;
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name www.bloomingreenfestival.com;

    ssl_certificate /etc/letsencrypt/live/www.bloomingreenfestival.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.bloomingreenfestival.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    return 301 https://bloomingreenfestival.com$request_uri;
}
