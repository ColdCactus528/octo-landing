# OCTO — тестовая вёрстка

Проект по макету из Figma «Тестовое задание Octo.fig». 
Представляет собой адаптивную вёрстку под 5 разрешений: xs / ssm / sm / md / lg.

Демо - https://octo-landing.vercel.app/ 

Технологии: Vite + React + Tailwind CSS
 
## Установка
npm ci

## Дев-сервер
npm run dev   
http://localhost:5173

## Прод-сборка
npm run build

## Предпросмотр прод-сборки
npm run preview

## Docker
docker build -t octo-landing .
docker run --rm -p 8080:80 octo-landing

открыть http://localhost:8080
