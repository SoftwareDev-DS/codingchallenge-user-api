Kurzanleitung Projekt Coding-Challenge

1. Clone repository with "git clone https://github.com/MyUsername/RepositoryName.git"
2. cd RepositoryName
3. run: npm i
4. run: npm run build (to generate all necessary files)
5. run: npm run start:dev to start the application
6. now u should see something like: 
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [NestFactory] Starting Nest application...
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [InstanceLoader] AppModule dependencies initialized +9ms
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [RoutesResolver] AppController {/}: +3ms
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [RouterExplorer] Mapped {/, GET} route +2ms
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [RoutesResolver] UsersController {/v1/users}: +0ms
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [RouterExplorer] Mapped {/v1/users, GET} route +0ms
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [RouterExplorer] Mapped {/v1/users/:id, GET} route +1ms
  [Nest] 24512  - 17.06.2025, 00:33:26     LOG [NestApplication] Nest application successfully started +2ms
7. go to browser and type: http://localhost:3000/v1/users
