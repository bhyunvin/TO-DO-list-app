import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { env } from './config';

/**
 * CORS 플러그인
 * 프론트엔드 및 모바일 앱에서의 요청을 허용하기 위한 CORS 설정
 * 개발 환경에서는 모든 출처를 허용
 */
export const corsPlugin = new Elysia({ name: 'cors' }).use(
  cors({
    origin: [
      'http://localhost:5173',
      env.FRONTEND_URL?.replace(/\/$/, '') || '',
    ].filter(Boolean),
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);
