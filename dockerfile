FROM nginx:stable-alpine

COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY README.md /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY js/ /usr/share/nginx/html/js/
COPY pages/ /usr/share/nginx/html/pages/
COPY styles/ /usr/share/nginx/html/styles/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]