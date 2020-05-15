import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get('/', async(ctx:any) => {
  await send(ctx, ctx.request.url.pathname, {
    root:`${Deno.cwd()}/views`,
    index: "index.html"
  })
});


const app = new Application();

app.use(router.routes());

app.use(router.allowedMethods());

console.log("Ready");

await app.listen({ port: 8000 });
