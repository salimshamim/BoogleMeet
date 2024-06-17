#Author: Salim Shamim

FROM node:20-alpine AS base

FROM base AS builder
RUN apk update
# Can't find its use, use it if facing compatibilty issue 
# Google Search says: The libc6-compat package provides compatibility libraries for glibc. It's installed in Alpine Linux and is 12 kB in size. For example, libc6-compat might be needed by outdated grpc-tools
# RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g turbo@latest
COPY . .
RUN turbo prune booglemeet-web --docker


FROM base AS installer
run apk update
#RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm install

# Build the project
COPY --from=builder /app/out/full/ .
RUN npx turbo run build --filter=booglemeet-web


FROM base AS runner
WORKDIR /app

#create user, dont run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/booglemeet-web/next.config.mjs .
#COPY --from=installer /app/apps/booglemeet-web/package-lock.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/booglemeet-web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/booglemeet-web/.next/static ./apps/booglemeet-web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/booglemeet-web/public ./apps/booglemeet-web/public

EXPOSE 3000
CMD ["node", "apps/booglemeet-web/server.js"]

# CMD ["sleep","infinity"]

# docker build --no-cache -t booglemeet-web -f apps/booglemeet-web/Dockerfile .


