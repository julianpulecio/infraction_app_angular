#Primera Etapa
FROM node:18.14.2-alpine3.17 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa

FROM nginx:stable-alpine
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step /app/dist/infraction_app_angular /usr/share/nginx/html